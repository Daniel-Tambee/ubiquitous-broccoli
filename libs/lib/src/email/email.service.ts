import { Injectable, Logger } from '@nestjs/common';
import { createTransport, Transporter } from 'nodemailer';
import { ConfigService } from '@nestjs/config';
import { MailOptions } from 'nodemailer/lib/smtp-transport';

@Injectable()
export class EmailService {
  private transporter: Transporter;
  private readonly logger = new Logger(EmailService.name);

  constructor(private configService: ConfigService) {
    const host = this.configService.get<string>('EMAIL_HOST');
    const port = this.configService.get<number>('EMAIL_PORT');
    const username = this.configService.get<string>('EMAIL_USERNAME');
    const password = this.configService.get<string>('EMAIL_PASSWORD');

    this.transporter = createTransport({
      host: host,
      port: port,
      auth: {
        user: username,
        pass: password,
      },
    });
  }

  async sendMail(to: string, subject: string, text: string): Promise<any> {
    const mailOptions: MailOptions = {
      from: this.configService.get<string>('EMAIL_USERNAME'),
      to: to,
      subject: subject,
      text: text,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      this.logger.log(`Email sent to ${to}: ${info.response}`);
      return info;
    } catch (error) {
      this.logger.error(`Failed to send email to ${to}: ${error.message}`);
      throw error;
    }
  }
}
