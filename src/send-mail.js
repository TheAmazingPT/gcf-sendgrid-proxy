const sgMail = require('@sendgrid/mail');
const apiKey = require('./api-key.json');

sgMail.setApiKey(apiKey);

/**
 * Send Mail with SendGrid
 * @param {object} body The SendGrid Payload, defined at the client tier
 * @param {function} callback
 */
exports.sendMail = (body, callback) => {
  sgMail
    .send(body)
    .then(() => callback(200))
    .catch(() => callback(500));
};
