import { google } from 'googleapis';
import dotenv from 'dotenv';
dotenv.config();

const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET
);
oAuth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

try {
  const { token } = await oAuth2Client.getAccessToken();
  console.log("✅ Access token obtained:", token);
} catch (err) {
  console.error("❌ Failed:", err.response?.data || err.message);
}