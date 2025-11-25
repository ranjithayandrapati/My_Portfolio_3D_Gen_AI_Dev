# Email Setup Guide for Contact Form

Your contact form is already integrated with EmailJS. Follow these steps to receive emails when someone contacts you through your portfolio.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Copy the **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Save the template
5. Copy the **Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the dashboard
2. Find your **Public Key** (or API Key)
3. Copy it (you'll need this later)

## Step 5: Update Environment Variables

1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual information:

```env
# EmailJS credentials from steps 2-4
VITE_APP_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key

# Your personal information
VITE_APP_YOUR_NAME=Your Full Name
VITE_APP_YOUR_EMAIL=your-actual-email@example.com
```

**Important**: Replace ALL placeholder values:
- `VITE_APP_YOUR_NAME` - Your full name (e.g., "Dhanaranjitha")
- `VITE_APP_YOUR_EMAIL` - The email where you want to receive contact form messages

## Step 6: Test the Contact Form

1. Restart your development server (if running):
   ```bash
   npm run dev
   ```
2. Navigate to your contact form
3. Fill out and submit a test message
4. Check your email inbox for the message

## Troubleshooting

- **Not receiving emails?**
  - Check your spam folder
  - Verify all credentials in `.env` are correct
  - Make sure you saved the `.env` file and restarted the dev server

- **Getting errors?**
  - Check browser console for error messages
  - Verify your EmailJS account is verified
  - Ensure your email service is properly connected in EmailJS dashboard

## Security Note

- Never commit your `.env` file to Git (it's already in `.gitignore`)
- Never share your EmailJS credentials publicly
- For production, set environment variables in your hosting platform (Vercel, Netlify, etc.)

## Current Configuration

Your contact form is configured in:
- **Component**: `src/components/Contact.jsx`
- **Environment variables**: `.env` file
  - EmailJS credentials (lines 4-6)
- **Security**: Your email and name are stored in `.env` and won't be exposed in your public code

## Security Benefits

By storing your email and name in the `.env` file:
- ✅ Your personal information is NOT visible in your GitHub repository
- ✅ The `.env` file is already in `.gitignore` so it won't be committed
- ✅ You can safely share your code without exposing your email address
- ✅ Easy to update without modifying your source code

Once you complete these steps, you'll start receiving emails whenever someone fills out your contact form!
