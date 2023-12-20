import nodemailer from 'nodemailer';


export const sendMail = async (options) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: options.to,
            subject: options.subject,
            html: options.html,
            text: options.text,
        };

        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.log(error);
    }
}