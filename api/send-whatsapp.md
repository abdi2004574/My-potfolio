// ============================================================
// WhatsApp Notification API Route
// Deploy to: Vercel API routes or Netlify Functions
// ============================================================

/*
QUICK SETUP (No Backend Required):
1. Open portfolio.html
2. Find: const WHATSAPP_NUMBER = "YOUR_WHATSAPP_NUMBER_HERE"
3. Replace with your actual WhatsApp number (with country code, no +)
4. Test the form - it will open WhatsApp with pre-filled message!

==============================================
ADVANCED: Twilio WhatsApp API (Optional)
==============================================

If you want automatic WhatsApp notifications (without manually sending),
set up Twilio:

1. Create Twilio Account: https://www.twilio.com
2. Enable WhatsApp in Twilio Console
3. Get Account SID, Auth Token, and WhatsApp sandbox number
4. Deploy this API route to Vercel/Netlify
5. Update USE_TWILIO = true and configure below
*/

// For Vercel API route - create: /api/send-whatsapp.ts
// For Netlify function - create: /netlify/functions/send-whatsapp.js

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { to, body } = req.body;

    // WhatsApp number format: whatsapp:+1234567890
    const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.TWILIO_FROM || 'whatsapp:+14155238886';

    const url = `https://api.twilio.com/2010-04-01/Accounts/${twilioAccountSid}/Messages.json`;

    const credentials = Buffer.from(`${twilioAccountSid}:${twilioAuthToken}`).toString('base64');

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${credentials}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                From: fromNumber,
                To: to,
                Body: body,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            return res.status(200).json({ success: true, sid: data.sid });
        } else {
            return res.status(400).json({ error: data.message });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

/*
==============================================
ENVIRONMENT VARIABLES (in Vercel/Netlify):
==============================================
TWILIO_ACCOUNT_SID=your_sid_here
TWILIO_AUTH_TOKEN=your_token_here
TWILIO_FROM=whatsapp:+14155238886
*/