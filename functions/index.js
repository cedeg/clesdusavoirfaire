const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
admin.initializeApp();

/**
* Here we're using Gmail to send 
*/
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'cedegasbl@gmail.com',
    pass: 'noegips5.'
  }
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {

    // getting dest email by query string
    const msg = req.body.data.msg;
    const from = req.body.data.email;
    const name = req.body.data.name;
    const mailOptions = {
      from: name + ' ' + from, // Something like: Jane Doe <janedoe@gmail.com>
      to: "infos@clesdusavoirfaire.be",
      subject: "Demande d'informations via le site",
      text: msg
    };

    // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.send("Sended");
    });
  });
});

