const nodemailer = require("nodemailer");

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

// Create a transporter object
const transporter = nodemailer.createTransport({
  host: "smtp.office365.com", // Outlook SMTP server
  port: 587, // Outlook SMTP port (usually 587 or 25)
  secure: false, // Set to true if using port 465 with SSL
  auth: {
    user: "info@lmlawfirm.ca", // Your Outlook email address
    pass: "$Surbhi1", // Your Outlook email password
  },
});

const mailOptions = {
  from: email, // Sender address
  to: "info@lmlawfirm.ca", // Recipient address
  name: name, // Sender name
  text: message, // Plain text body
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
