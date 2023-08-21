const nodemailer = require("nodemailer");
var express = require('express');
var router = express.Router();


/* GET home page. */

router.get('/', async  function(req, res, next) {
  // let  data = {
  //   message: 'Hello world!',
  //   base:  'base.njk',
  //   title: 'Nunjucks example'
  // }
  res.render('main.njk')
})

router.post('/', async  function(req, res, next) {
    let data = req.body
    // add data treatment 
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL,
        pass: process.env.MAIL_PASS,
      }
    });
    
    async function main() {
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: data.email_from, // sender address
        to: "patignier.contact@gmail.com", // list of receivers
        subject: data.subject + ", " + data.email_from + ", " + data.name, // Subject line
        text: data.message, // plain text body
      })};
    main().catch(console.error)
    res.redirect('/')
    })

module.exports = router;
