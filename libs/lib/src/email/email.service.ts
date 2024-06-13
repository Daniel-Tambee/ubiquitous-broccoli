import { Injectable } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';

@Injectable()
export class MailService {
  constructor() {
    const apiKey = process.env.SENDGRID_KEY;
    if (!apiKey) {
      throw new Error(
        'SENDGRID_API_KEY is not defined in the environment variables',
      );
    }
    sgMail.setApiKey(apiKey);
  }

  async sendEmail(email: string, subject: string, text: string, html: string) {
    const msg = {
      to: email,
      from: 'buynbulk22@gmail.com', // Your verified sender
      subject,
      text,
      html,
    };

    try {
      await sgMail.send(msg);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error.toString());
      if (error.response) {
        console.error('SendGrid response:', error.response.body);
      }
      throw error;
    }
  }
}
