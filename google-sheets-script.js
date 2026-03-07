/**
 * Google Apps Script for 5 Star Luxury Watches Order Management
 * This script creates a web app that receives order data from the website
 * and stores it in a Google Sheet for database management.
 */

// Global variables
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE'; // Replace with your Google Sheet ID
const SHEET_NAME = 'Orders'; // Name of the sheet/tab

// Setup function - Run this once to create the sheet
function setup() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
  
  // Create headers if sheet is empty
  if (sheet.getLastRow() === 0) {
    const headers = [
      'Order ID',
      'Date',
      'Customer Name',
      'Customer Email',
      'Customer Address',
      'Product Name',
      'Product Price',
      'Quantity',
      'Item Subtotal',
      'Selected Image',
      'Order Subtotal',
      'Tax (7.5%)',
      'Delivery Fee',
      'Grand Total',
      'Payment Method',
      'Reference Links',
      'Timestamp'
    ];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight('bold');
    sheet.getRange(1, 1, 1, headers.length).setBackground('#2c3e50');
    sheet.getRange(1, 1, 1, headers.length).setFontColor('#ffffff');
  }
  
  Logger.log('Sheet setup complete');
}

// Web app function - This receives POST requests from the website
function doPost(e) {
  try {
    // Parse the incoming data
    const orderData = JSON.parse(e.postData.contents);
    
    // Get the sheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // Ensure sheet exists
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Sheet not found'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Prepare row data
    const timestamp = new Date();
    const orderItems = orderData.orderItems;
    
    // Add each order item as a separate row
    orderItems.forEach((item, index) => {
      const rowData = [
        orderData.orderId,
        orderData.date,
        orderData.customerName,
        orderData.customerEmail,
        orderData.customerAddress,
        item.name,
        item.price,
        item.quantity,
        item.subtotal,
        item.selectedImage,
        index === 0 ? orderData.subtotal : '', // Show subtotal only for first item
        index === 0 ? orderData.tax : '', // Show tax only for first item
        index === 0 ? orderData.deliveryFee : '', // Show delivery fee only for first item
        index === 0 ? orderData.grandTotal : '', // Show grand total only for first item
        index === 0 ? orderData.paymentMethod : '', // Show payment method only for first item
        index === 0 ? orderData.referenceLinks : '', // Show reference links only for first item
        timestamp
      ];
      
      // Append row to sheet
      sheet.appendRow(rowData);
    });
    
    // Format the new rows
    const lastRow = sheet.getLastRow();
    const numRows = orderItems.length;
    const range = sheet.getRange(lastRow - numRows + 1, 1, numRows, sheet.getLastColumn());
    
    // Apply formatting
    range.setFontSize(10);
    range.setVerticalAlignment('middle');
    
    // Alternate row colors
    for (let i = 0; i < numRows; i++) {
      const row = lastRow - numRows + 1 + i;
      if (row % 2 === 0) {
        sheet.getRange(row, 1, 1, sheet.getLastColumn()).setBackground('#f8f9fa');
      }
    }
    
    // Auto-resize columns
    sheet.autoResizeColumn(1); // Order ID
    sheet.autoResizeColumn(2); // Date
    sheet.autoResizeColumn(3); // Customer Name
    sheet.autoResizeColumn(4); // Customer Email
    sheet.autoResizeColumn(6); // Product Name
    
    // Success response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Order saved successfully',
      orderId: orderData.orderId,
      rowCount: orderItems.length
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('Error in doPost: ' + error.toString());
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString(),
      details: error.stack
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to get orders (for admin dashboard)
function getOrders() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Sheet not found'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    const rows = data.slice(1);
    
    const orders = rows.map(row => {
      const order = {};
      headers.forEach((header, index) => {
        order[header] = row[index];
      });
      return order;
    });
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      orders: orders
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('Error in getOrders: ' + error.toString());
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to deploy as web app
function deployWebApp() {
  const scriptId = ScriptApp.getScriptId();
  Logger.log('Script ID: ' + scriptId);
  Logger.log('Deploy URL: https://script.google.com/macros/s/' + scriptId + '/exec');
}

// Test function
function testWebApp() {
  const testData = {
    orderId: 'LX-12345',
    date: new Date().toISOString(),
    customerName: 'Test Customer',
    customerEmail: 'test@example.com',
    customerAddress: '123 Test St, Lagos, 100001',
    orderItems: [
      {
        name: 'Test Watch',
        price: 125000,
        quantity: 1,
        subtotal: 125000,
        selectedImage: '/test/image.jpg'
      }
    ],
    subtotal: 125000,
    tax: 9375,
    deliveryFee: 4000,
    grandTotal: 138375,
    paymentMethod: 'Payment on Delivery',
    referenceLinks: '1. Test Watch - ₦125,000 - http://localhost:3000/#/product/test?img=0'
  };
  
  // Simulate POST request
  const e = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(e);
  Logger.log(result.getContent());
}
