import nodemailer from 'nodemailer';

const email = 'noreplychaugiang@gmail.com';
const pass = 'qhzbeswaimvicmgz';

export const mailOptions = {
  from: email,
};

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass,
  },
});

export default transporter;
