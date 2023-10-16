import { NextApiRequest, NextApiResponse } from 'next';
import transporter, { mailOptions } from '../../lib/emailConfig';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const data = req.body;

    try {
      await transporter.sendMail({
        ...mailOptions,
        to: data.email,
        subject: 'Information Needed Support',
        html: `<h1>First And Last Name: ${data.firstAndLastName}</h1><br/><h1>Phone Number: ${data.phoneNumber}</h1><br/><h1>Email: ${data.email}</h1><br/><h1>Information Needed Support: ${data.informationNeededSupport}</h1>`,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res
        .status(500)
        .json({ error: 'An error occurred while sending the email' });
    }
  } else {
    res.status(405).end();
  }
}
