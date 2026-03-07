# Google Sheets Integration Setup Guide

## Overview
This guide will help you set up the Google Sheets integration to automatically store orders from your website checkout.

## Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "5 Star Luxury Orders"
3. Copy the spreadsheet ID from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit`
   - Copy the part between `/d/` and `/edit`

## Step 2: Create Google Apps Script
1. Open your new spreadsheet
2. Go to **Extensions** → **Apps Script**
3. Delete any existing code
4. Copy the entire content from `google-sheets-script.js`
5. Paste it into the Apps Script editor
6. **Important:** Replace `YOUR_SPREADSHEET_ID_HERE` with your actual spreadsheet ID

## Step 3: Setup the Sheet
1. In the Apps Script editor, select the `setup` function from the dropdown
2. Click **Run**
3. Grant permissions when prompted
4. This will create the headers and format the sheet

## Step 4: Deploy as Web App
1. Click **Deploy** → **New deployment**
2. Select type: **Web app**
3. Configuration:
   - Description: "5 Star Luxury Orders API"
   - Execute as: "Me (your email)"
   - Who has access: "Anyone"
4. Click **Deploy**
5. Grant permissions when prompted
6. Copy the **Web app URL** (it will look like: `https://script.google.com/macros/s/AKfycbx.../exec`)

## Step 5: Update Website Code
1. Open `/Users/mac/Downloads/5-star-luxury-watches/pages/Checkout.tsx`
2. Find line 76:
   ```javascript
   const scriptUrl = 'https://script.google.com/macros/s/AKfycbxYOUR_SCRIPT_ID_HERE/exec';
   ```
3. Replace `AKfycbxYOUR_SCRIPT_ID_HERE` with your actual script ID from the web app URL

## Step 6: Test the Integration
1. In Apps Script editor, select `testWebApp` function
2. Click **Run** to test with sample data
3. Check your Google Sheet - you should see test data appear
4. Test the actual website checkout process

## Features Included

### Automatic Data Capture
- Customer information (name, email, address)
- Order details (products, quantities, prices)
- Selected image variants
- Pricing breakdown (subtotal, tax, delivery fee, total)
- Payment method information
- Reference links for each product
- Timestamps

### Data Organization
- Each order item gets its own row
- Order-level info (subtotal, tax, etc.) shows only on first item
- Professional formatting with alternating row colors
- Auto-resized columns for readability

### Error Handling
- Graceful fallback if Google Sheets fails
- Website continues to WhatsApp even if storage fails
- Detailed error logging for debugging

## Security Notes
- Web app is accessible to anyone (required for website communication)
- Data is stored in your private Google Sheet
- No sensitive information is exposed in the script
- Consider adding authentication for production use

## Maintenance
- Monitor the sheet for new orders
- Use the `getOrders()` function for admin dashboards
- Regular backups of your Google Sheet
- Update script as needed for new features

## Troubleshooting

### Common Issues
1. **"Sheet not found"** - Check spreadsheet ID in script
2. **"Permission denied"** - Re-deploy web app with correct permissions
3. **No data appearing** - Check network requests in browser console
4. **CORS errors** - Web app must be deployed with "Anyone" access

### Debugging
- Check Apps Script execution logs: Extensions → Apps Script → Executions
- Use browser developer tools to monitor network requests
- Test with `testWebApp()` function first

## Production Deployment
1. Use the production web app URL in your website code
2. Consider adding error monitoring
3. Set up email notifications for new orders
4. Regular backups of the Google Sheet

The integration will automatically store all orders in your Google Sheet database while maintaining the WhatsApp notification system for immediate customer service.
