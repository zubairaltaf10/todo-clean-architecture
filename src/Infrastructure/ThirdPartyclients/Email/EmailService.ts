import nodemailer from 'nodemailer'
import Email from '../../../../Http/Config/Email';

class EmailService {
  protected transporter: nodemailer.Transporter;

  constructor() {
    this.connection();
  }

  private connection() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: Email.NODE_MAILER_USERNAME,
        pass: Email.NODE_MAILER_PASSWORD
      }
    });
  }

  sendMail(to: string, subject: string, content: string) {
    const options = {
      from: Email.NODE_MAILER_USERNAME,
      to: to,
      subject: subject,
      text: content
    }

    this.transporter.sendMail(
      options, (error, info) => {
        if (error) {
          return console.log(`error: ${error}`);
        }
        console.log(`Message Sent ${info.response}`);
      });
  }
}

export default new EmailService()