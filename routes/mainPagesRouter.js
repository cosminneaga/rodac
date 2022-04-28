const express = require('express');
const Joi = require('joi');
const formidable = require('formidable');


const router = express.Router({ mergeParams: true });

router.route('/').get((req, res) => {
    res.render('index.ejs');
});

router.route('/terms-and-conditions').get((req, res) => {
    res.render('tac.ejs');
});

router.route('/privacy-policy').get((req, res) => {
    res.render('pp.ejs');
});

router.route('/contactFormData').post(async(req, res) => {

    const schema = Joi.object().keys({
        FirstName: Joi.string().trim().required(),
        LastName: Joi.string().trim().required(),
        Email: Joi.string().trim().email().required(),
        Subject: Joi.string().trim().required(),
        Message: Joi.string().trim().required()
    });

    const validation = schema.validate(req.body);
    if (!validation.error) {
        ContactEmailData(validation.value.FirstName, validation.value.LastName, validation.value.Email, validation.value.Subject, validation.value.Message);
    }
    res.status(200).json({ success: true, data: validation })

});


function ContactEmailData(fname, lname, email, subject, message) {
    const mailjet = require('node-mailjet')
        .connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)
    const request = mailjet
        .post("send", { 'version': 'v3.1' })
        .request({
            "Messages": [{
                "From": {
                    "Email": process.env.MJ_EMAIL_SENDER,
                    "Name": "Rodac Website Enquery"
                },
                "To": [{
                    "Email": process.env.MJ_EMAIL_RECEIVER,
                    "Name": fname
                }],
                "Subject": "New Business Enquery",
                "HTMLPart": `
                <h3>Subject</h3>
                <h3><i>${subject}</i></h3>
                <h3>Name:</h3> <i><h4>${fname} ${lname}</h4></i> 
                <h3>E-Mail:</h3> ${email} 
                <h3>Message:</h3> <i><h4>${message}</h4></i>
                `
            }]
        })
    request
        .then((result) => {
            console.log(result.body)
        })
        .catch((err) => {
            console.log(err.statusCode)
        });
};


router.route('/careersFormData').post((req, res) => {

    let formatArray = req.body.cv.name.split('.');
    let format = formatArray[formatArray.length - 1];
    if (format != "pdf") {
        res.status(200).json({ success: false, formatError: true });
        return false;
    }

    const schema = Joi.object().keys({
        fullName: Joi.string().trim().required(),
        email: Joi.string().trim().email().required(),
        phone: Joi.string().trim().required(),
        cv: Joi.object()
    });

    const validation = schema.validate(req.body);
    if (!validation.error) {
        CareersEmailData(validation.value.fullName, validation.value.email, validation.value.phone, validation.value.cv);
    }
    res.status(200).json({ success: true, data: validation });

});

function CareersEmailData(name, email, phone, cv) {
    const mailjet = require('node-mailjet')
        .connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)
    const request = mailjet
        .post("send", { 'version': 'v3.1' })
        .request({
            "Messages": [{
                "From": {
                    "Email": process.env.MJ_EMAIL_SENDER,
                    "Name": "Rodac Website Job Application"
                },
                "To": [{
                    "Email": process.env.MJ_EMAIL_RECEIVER,
                    "Name": name
                }],
                "Subject": "New Job Application",
                "HTMLPart": `
                <h3>Name: </h3>
                <h3><i>${name}</i></h3>
                <h3>Email & Phone:</h3>
                <i><h4>${email} ${phone}</h4></i> 
                `,
                "Attachments": [{
                    "ContentType": "application/pdf",
                    "Filename": cv.name,
                    "Base64Content": cv.data
                }]
            }]
        })
    request
        .then((result) => {
            console.log(result.body)
        })
        .catch((err) => {
            console.log(err.statusCode)
        });
};



module.exports = router;