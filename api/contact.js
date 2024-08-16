// api/contact.js
const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Setup Nodemailer transport for Outlook
    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "info@oceanicsupportservices.com", // Replace with your Outlook email
        pass: "Kabiir@2020", // Replace with your Outlook email password
      },
      tls: {
        ciphers: "SSLv3",
      },
    });

    // Mail options
    const mailOptions = {
      from: email,
      to: "info@oceanicsupportservices.com", // Replace with your client's email
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ status: "Message sent successfully!" });
    } catch (error) {
      res.status(500).json({ error: "Error sending email: " + error.message });
    }
  } else {
    res.status(405).json({ error: "Only POST requests are allowed" });
  }
}
