const {sendMail} = require('./src/send-mail.js');

exports.sendMail = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'POST');
    res.set('Access-Control-Allow-Headers', '*');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
  } else if (req.method === 'POST') {
    res.set('Access-Control-Allow-Origin', '*');
    sendMail(JSON.parse(req.body), status => res.send(status));
  } else {
    res.set('Access-Control-Allow-Origin', '*');
    res.send('What teh fuck are you want?');
  }
};
