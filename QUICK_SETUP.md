# Quick Google Sheets Setup

## 📋 Simple Steps

### 1. Get Your Google Sheet ID
1. Open your Google Sheet
2. Copy ID from URL: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
3. Copy the `SPREADSHEET_ID` part

### 2. Setup Apps Script
1. Open your Google Sheet
2. Go to **Extensions** → **Apps Script**
3. Delete all existing code
4. Copy entire content from `SIMPLE_GOOGLE_SCRIPT.js`
5. Paste it into the editor
6. **IMPORTANT:** Replace `YOUR_SPREADSHEET_ID_HERE` with your actual ID

### 3. Initialize Sheet
1. Select `setupSheet` function from dropdown
2. Click **Run**
3. Grant permissions when prompted
4. This creates headers and formats your sheet

### 4. Deploy Web App
1. Click **Deploy** → **New deployment**
2. Settings:
   - Type: **Web app**
   - Description: "Order Collection"
   - Execute as: **Me**
   - Who has access: **Anyone**
3. Click **Deploy**
4. Grant permissions
5. Copy the **Web app URL**

### 5. Update Website
1. Open `Checkout.tsx`
2. Find line: `const scriptUrl = 'PASTE_YOUR_NEW_WEB_APP_URL_HERE';`
3. Replace with your Web app URL

### 6. Test
1. In Apps Script, select `testOrder` function
2. Click **Run**
3. Check your Google Sheet - test data should appear

## 🔧 What This Script Does

### Automatic Data Collection
- ✅ Order ID and timestamp
- ✅ Customer information (name, email, address)
- ✅ Product details (name, price, quantity)
- ✅ Selected image variants
- ✅ Complete pricing breakdown
- ✅ Payment method tracking
- ✅ Reference links for each product

### Smart Formatting
- 🎨 Professional headers with styling
- 📊 Auto-sized columns for readability
- ⏰ Automatic timestamps
- 🔄 Error handling with logging

## 🚨 Important Notes

- **Spreadsheet ID:** Must be replaced correctly
- **Deploy with "Anyone" access** - Required for website
- **Test first** with `testOrder()` function
- **Keep URL secure** but accessible

## 📞 Support

If you have issues:
1. Check Apps Script executions log
2. Verify spreadsheet ID is correct
3. Ensure web app is deployed with "Anyone" access
4. Test the URL in browser directly

That's it! Your orders will automatically save to Google Sheets.
