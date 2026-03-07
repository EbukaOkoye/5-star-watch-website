/**
 * 5 Star Luxury Watches - Order Collection Script
 * CORS-enabled version
 */

function doPost(e) {
  try {
    // Set CORS headers
    var output = ContentService.createTextOutput();
    output.setMimeType(ContentService.MimeType.JSON);

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Add each order item as a separate row
    data.orderItems.forEach(function(item, index) {
      sheet.appendRow([
        data.orderId,
        data.date,
        data.customerName,
        data.customerEmail,
        data.customerAddress,
        item.name,
        item.price,
        item.quantity,
        item.subtotal,
        item.selectedImage || item.image,
        index === 0 ? data.subtotal : '', // Show order totals only for first item
        index === 0 ? data.tax : '',
        index === 0 ? data.deliveryFee : '',
        index === 0 ? data.grandTotal : '',
        index === 0 ? data.paymentMethod : '',
        index === 0 ? data.referenceLinks : ''
      ]);
    });

    output.setContent(JSON.stringify({ success: true }));
    return output;
  } catch (error) {
    var errorOutput = ContentService.createTextOutput();
    errorOutput.setMimeType(ContentService.MimeType.JSON);
    errorOutput.setContent(JSON.stringify({ error: error.toString() }));
    return errorOutput;
  }
}

// Alternative method using GET with callback
function doGet(e) {
  try {
    var callback = e.parameter.callback;
    var data = {
      status: 'success',
      message: 'Google Sheets API is working',
      timestamp: new Date().toISOString()
    };

    var output = ContentService.createTextOutput();
    output.setMimeType(ContentService.MimeType.JAVASCRIPT);
    output.setContent(callback + '(' + JSON.stringify(data) + ')');
    return output;
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function
function testOrder() {
  var testData = {
    orderId: 'LX-TEST-12345',
    date: new Date().toISOString(),
    customerName: 'Test Customer',
    customerEmail: 'test@example.com',
    customerAddress: '123 Test Street, Lagos, 100001',
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

  var e = { postData: { contents: JSON.stringify(testData) } };
  var result = doPost(e);
  Logger.log('Test result: ' + result.getContent());
  return result.getContent();
}
