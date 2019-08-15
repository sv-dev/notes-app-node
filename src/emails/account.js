const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = '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';

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'wocipojuf@alltopmail.com',
    subject: 'Test email',
    text: `Welcome ${name}!!!`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'wocipojuf@alltopmail.com',
    subject: 'Sorry to see you go!',
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
