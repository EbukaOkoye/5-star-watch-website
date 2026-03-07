/**
 * 5 Star Luxury Watches - Order Collection Script
 * Paste this entire code into Google Apps Script editor
 */

// Configuration - UPDATE THESE VALUES
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE'; // Replace with your Google Sheet ID
const SHEET_NAME = 'Orders';

// Initialize the sheet with headers
function setupSheet() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
    
    // Create headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      const headers = [
        'Order ID',
        'Date & Time',
        'Customer Name',
        'Customer Email',
        'Customer Address',
        'Product Name',
        'Price',
        'Quantity',
        'Subtotal',
        'Selected Image',
        'Order Subtotal',
        'Tax (7.5%)',
        'Delivery Fee',
        'Grand Total',
        'Payment Method',
        'Reference Links'
      ];
      
      sheet.getRange(1, 1, 1, headers.length).setValues([headers])
        .setFontWeight('bold')
        .setBackground('#2c3e50')
        .setFontColor('#ffffff');
    }
    
    SpreadsheetApp.flush();
    return 'Sheet setup complete';
  } catch (error) {
    return 'Error: ' + error.toString();
  }
}

// Main function to receive orders from website
function doPost(e) {
  try {
    const orderData = JSON.parse(e.postData.contents);
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Sheet not found. Run setupSheet() first.'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Add each order item as a row
    const timestamp = new Date();
    orderData.orderItems.forEach((item, index) => {
      const row = [
        orderData.orderId,
        timestamp,
        orderData.customerName,
        orderData.customerEmail,
        orderData.customerAddress,
        item.name,
        item.price,
        item.quantity,
        item.subtotal,
        item.selectedImage || item.image,
        index === 0 ? orderData.subtotal : '', // Show order subtotal only for first item
        index === 0 ? orderData.tax : '', // Show tax only for first item
        index === 0 ? orderData.deliveryFee : '', // Show delivery fee only for first item
        index === 0 ? orderData.grandTotal : '', // Show grand total only for first item
        index === 0 ? orderData.paymentMethod : '', // Show payment method only for first item
        index === 0 ? orderData.referenceLinks : '' // Show reference links only for first item
      ];
      
      sheet.appendRow(row);
    });
    
    // Auto-format the new rows
    const lastRow = sheet.getLastRow();
    const numRows = orderData.length;
    const range = sheet.getRange(lastRow - numRows + 1, 1, numRows, sheet.getLastColumn());
    range.setFontSize(10).setVerticalAlignment('middle');
    
    // Success response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Order saved successfully',
      orderId: orderData.orderId,
      itemsSaved: orderData.orderItems.length
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('Error in doPost: ' + error.toString());
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function to verify setup
function testOrder() {
  const testData = {
    orderId: 'LX-TEST-12345',
    date: new Date().toISOString(),
    customerName: 'Test Customer',
    customerEmail: 'test@example.com',
    customerAddress: '123 Test Street, Lagos, 100001',
    orderItems: [{
      name: 'Test Watch',
      price: 125000,
      quantity: 1,
      subtotal: 125000,
      selectedImage: '/test/image.jpg'
    }],
    subtotal: 125000,
    tax: 9375,
    deliveryFee: 4000,
    grandTotal: 138375,
    paymentMethod: 'Payment on Delivery',
    referenceLinks: '1. Test Watch - ₦125,000 - http://localhost:3000/#/product/test?img=0'
  };
  
  const e = { postData: { contents: JSON.stringify(testData) } };
  const result = doPost(e);
  Logger.log('Test result: ' + result.getContent());
  return result.getContent();
}

// Get deployment URL
function getDeploymentUrl() {
  const scriptId = ScriptApp.getScriptId();
  const url = 'https://script.google.com/macros/s/' + scriptId + '/exec';
  Logger.log('Deployment URL: ' + url);
  return url;
}
