# Portfolio Contact Form Backend Setup

This backend handles contact form submissions by storing data in Google Sheets and sending email notifications.

## Prerequisites

1. **Node.js** (v16 or higher)
2. **Google Cloud Console Account**
3. **Gmail Account** with 2-Factor Authentication enabled

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Google Sheets Setup

#### Create a Google Cloud Project:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Google Sheets API

#### Create Service Account:
1. Go to IAM & Admin > Service Accounts
2. Click "Create Service Account"
3. Name it (e.g., "portfolio-contact-form")
4. Click "Create and Continue"
5. Skip role assignment for now
6. Click "Done"

#### Generate Service Account Key:
1. Click on your service account
2. Go to "Keys" tab
3. Click "Add Key" > "Create New Key"
4. Select "JSON" format
5. Download the JSON file

#### Create Google Sheet:
1. Create a new Google Sheet
2. Add headers in row 1: `Timestamp`, `Name`, `Email`, `Subject`, `Message`
3. Copy the Sheet ID from URL (between `/d/` and `/edit`)
4. Share the sheet with your service account email (from the JSON file)

### 3. Gmail Setup

#### Enable App Password:
1. Enable 2-Factor Authentication on your Gmail
2. Go to Google Account Settings
3. Security > App Passwords
4. Generate app password for "Mail"
5. Copy the 16-character password

### 4. Environment Configuration

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Fill in your credentials in `.env`:
   ```env
   GOOGLE_PROJECT_ID=your_project_id
   GOOGLE_PRIVATE_KEY_ID=your_private_key_id
   GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour_private_key\n-----END PRIVATE KEY-----"
   GOOGLE_CLIENT_EMAIL=your_service_account@project.iam.gserviceaccount.com
   GOOGLE_CLIENT_ID=your_client_id
   GOOGLE_SHEET_ID=your_sheet_id
   EMAIL_USER=your_email@gmail.com
   EMAIL_APP_PASSWORD=your_16_char_app_password
   NOTIFICATION_EMAIL=where_to_receive_notifications@gmail.com
   ```

### 5. Run the Server

#### Development:
```bash
npm run dev
```

#### Production:
```bash
npm start
```

The server will run on `http://localhost:3001`

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check

## Security Features

- Rate limiting (5 requests per 15 minutes per IP)
- CORS protection
- Helmet security headers
- Input validation
- Email format validation

## Troubleshooting

### Common Issues:

1. **Google Sheets API Error**: Ensure the service account email has edit access to your sheet
2. **Email Not Sending**: Verify app password is correct and 2FA is enabled
3. **CORS Error**: Check that FRONTEND_URL matches your React app URL
4. **Private Key Error**: Ensure the private key includes proper line breaks

### Testing the Setup:

1. Start the server
2. Visit `http://localhost:3001/api/health` - should return server status
3. Submit a test form from your React app
4. Check Google Sheet for new row
5. Check email for notification

## Production Deployment

When deploying to production:

1. Update `FRONTEND_URL` to your production domain
2. Use environment variables instead of `.env` file
3. Consider using a process manager like PM2
4. Set up proper logging
5. Configure reverse proxy (nginx)

## Support

If you encounter issues:
1. Check server logs
2. Verify all environment variables are set correctly
3. Ensure Google Cloud APIs are enabled
4. Confirm service account permissions
