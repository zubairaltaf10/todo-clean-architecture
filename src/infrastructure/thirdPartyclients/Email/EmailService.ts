import nodemailer from 'nodemailer'

class EmailService {
  protected transporter: nodemailer.Transporter;

  constructor() {
    this.connection();
  }

  private connection() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'zubair.altaf@carbonteq.com',
        pass: 'iamzubair'
      }
    });
  }

  sendMail(to: string, subject: string, content: string) {
    const options = {
      from: 'zubair.altaf@carbonteq.com',
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