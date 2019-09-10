const express = require('express')
const nodemailer = require('nodemailer')
const validator = require('validator')
const xssFilters = require('xss-filters')

const app = express()

app.use(express.json())

app.get('/', function (req, res) {
  res.status(405).json({ error: 'sorry!' })
})

app.post('/', function (req, res) {
  const attributes = ['name', 'email', 'msg']
  const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body[n]))
  const someInvalid = sanitizedAttributes.some(r => !r)

  if (someInvalid) {
    return res.status(422).json({ 'error': 'Ugh.. That looks unprocessable!' })
  }

  sendMail(...sanitizedAttributes)
  res.status(200).json({ 'message': 'OH YEAH' })
})
module.exports = {
  path: '/api/contact',
  handler: app
}

const validateAndSanitize = (key, value) => {
  const rejectFunctions = {
    name: v => v.length < 4,
    email: v => !validator.isEmail(v),
    msg: v => v.length < 25
  }

  // If object has key and function returns false, return sanitized input. Else, return false
  return rejectFunctions.hasOwnProperty(key) && !rejectFunctions[key](value) && xssFilters.inHTMLData(value)
}

const sendMail = (name, email, msg) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // use TLS
    auth: {
      user: "info@clesdusavoirefaire.be",
      pass: "password1."
    },
    tls: {
      // do not fail on invalid certs
      ciphers: 'SSLv3'
    }
  })
  transporter.sendMail({
    from: email,
    to: 'info@clesdusavoirefaire.be',
    subject: 'Nouveau contact à partir du site',
    text: msg
  })
}