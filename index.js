const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const rp = require("request-promise");


// ==============================
// FUNCTION TO SEND EMAIL
// ==============================

const goMail = (name, email, message, phone, subject) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "mbukekachamaine@gmail.com",
            pass: "Man@1097"
        }
    });

    const mailOptions = {
        from: "mbukekachamaine@gmail.com",
        to: "mbukekachamaine@gmail.com",
        subject: 'Web Profile Contact Request',
        html: `<h2>You have a new contact request from your web portfolio</h2>
        <h3>Name: </h3> <p>${name}</p>
        <h3>Email: </h3> <p>${email}</p>
        <h3>Message: </h3> <p>${message}</p>
        <h3>subject: </h3> <p>${subject}</p>
        <h3>phone: </h3> <p>${phone}</p>`
    };

    const getDeliveryStatus = (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    };

    transporter.sendMail(mailOptions, getDeliveryStatus);
};

//onDataAdded watches for changes in database
exports.onDataAdded = functions.database.ref('/messages/{sessionId}').onCreate((snapshot, context) => {
    const Data = snapshot.val();
    const name = Data.name;
    const email = Data.email;
    const message = Data.message;
    const phone = Data.phone;
    const subject = Data.subject;

    goMail(name, email, message.phone, subject);
    return null;
});