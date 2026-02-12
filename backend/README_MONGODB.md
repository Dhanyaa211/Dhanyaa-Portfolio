# Portfolio Contact Form Backend - MongoDB Atlas Integration

This backend handles contact form submissions by storing data in **MongoDB Atlas** and sending email notifications.

## Prerequisites

1. **Node.js** (v16 or higher)
2. **MongoDB Atlas Account** (free tier available)
3. **Gmail Account** with 2-Factor Authentication enabled

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Set up MongoDB Atlas

#### Create MongoDB Atlas Account:
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account and sign in
3. Create a new project (e.g., "Portfolio")

#### Create Database Cluster:
1. Click "Create a New Cluster"
2. Choose the free tier (M0 Sandbox) - **FREE**
3. Select a cloud provider and region (choose closest to you)
4. Name your cluster (e.g., "portfolio-cluster")
5. Click "Create Cluster" (takes 3-5 minutes)

#### Set up Database Access:
1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Create a user with password authentication
4. Username: `portfoliouser` (or any name you prefer)
5. Generate a secure password and **save it**
6. Set permissions to "Read and write to any database"
7. Click "Add User"

#### Set up Network Access:
1. Go to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. **For development**: Click "Allow Access from Anywhere" (0.0.0.0/0)
4. **For production**: Add your specific IP addresses only
5. Click "Confirm"

#### Get Connection String:
1. Go to "Clusters" and click "Connect" on your cluster
2. Choose "Connect your application"
3. Select "Node.js" and version "4.1 or later"
4. Copy the connection string - it looks like:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<username>` with your database username
6. Replace `<password>` with your database user password
7. Add your database name: change `/?retryWrites` to `/portfolio?retryWrites`

### 3. Gmail Setup

#### Enable App Password:
1. Enable 2-Factor Authentication on your Gmail account
2. Go to [Google Account Security](https://myaccount.google.com/security)
3. Security > App Passwords
4. Generate app password for "Mail"
5. Copy the 16-character password (no spaces)

### 4. Environment Configuration

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Fill in your credentials in `.env`:
   ```env
   PORT=3001
   FRONTEND_URL=http://localhost:5173
   
   # Your Gmail credentials
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

## 🎯 What This Does

✅ **Saves form data** to MongoDB Atlas automatically  
✅ **Sends email notifications** to your specified email  
✅ **Stores additional metadata** (IP, timestamp, user agent)  
✅ **Rate limiting** prevents spam (5 requests per 15 min)  
✅ **Form validation** ensures data quality  
✅ **Error handling** with user-friendly messages  
✅ **Security headers** and CORS protection  
✅ **Database queries** to retrieve contact history

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check + database status
- `GET /api/contacts` - Get all contacts (with pagination)
- `GET /api/contacts/:id` - Get specific contact by ID

## Database Schema

The contact data is stored with the following structure:
```javascript
{
  name: String (required, max 100 chars),
  email: String (required, max 150 chars),
  subject: String (required, max 200 chars),
  message: String (required, max 2000 chars),
  submittedAt: Date (auto-generated),
  ipAddress: String,
  userAgent: String,
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```

## 🔧 Testing

1. Visit http://localhost:3001/api/health - should show server and database status
2. Submit a test form from your React app
3. Check MongoDB Atlas dashboard to see new document
4. Check your email for notification

## 🚨 Troubleshooting

### Common Issues:

**MongoDB connection failed?**
- Check your connection string format
- Verify username/password are correct
- Ensure network access allows your IP
- Check if cluster is still provisioning

**Email not sending?**
- Verify app password is correct (16 characters, no spaces)
- Ensure 2FA is enabled on Gmail
- Check EMAIL_USER format

**CORS errors?**
- Ensure FRONTEND_URL matches your React app URL
- Check if both servers are running

**Rate limited?**
- Wait 15 minutes or restart server
- Check if you're making too many requests

### MongoDB Atlas Dashboard:
- View your data: Go to Clusters > Browse Collections
- Monitor usage: Database tab shows storage and operations
- Check logs: Clusters > ... > View Monitoring

## 🚀 Production Deployment

When deploying to production:

1. **Environment Variables**: Use your hosting platform's environment variable system
2. **Network Access**: Restrict MongoDB access to your server's IP only
3. **Database User**: Create separate user with minimal required permissions
4. **Connection Pooling**: MongoDB driver handles this automatically
5. **Monitoring**: Enable MongoDB Atlas monitoring and alerts
6. **Backup**: Atlas provides automatic backups on paid tiers

## 📊 Viewing Your Data

### MongoDB Atlas Dashboard:
1. Go to your cluster
2. Click "Browse Collections"
3. Select "portfolio" database
4. View "contacts" collection
5. See all submitted forms with timestamps

### API Endpoints:
- `GET /api/contacts` - View all contacts (paginated)
- `GET /api/contacts/[contact_id]` - View specific contact

## 💰 Cost Information

- **MongoDB Atlas**: Free tier (M0) includes 512MB storage - perfect for contact forms
- **Hosting**: Deploy on free tiers of Heroku, Vercel, or Railway
- **Total Cost**: $0 for small-medium traffic websites

## Support

If you encounter issues:
1. Check server logs for detailed error messages
2. Verify MongoDB Atlas connection in the dashboard
3. Test database connection with the health endpoint
4. Check email credentials and 2FA setup

---
*Your contact form now uses MongoDB Atlas for secure, scalable data storage! 🎉*
