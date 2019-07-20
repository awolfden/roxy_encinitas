const stripe = require('stripe')($Stripe_Key); // add your secret key here

exports.handler = (event, context, callback) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return callback(null, { statusCode: 405, body: 'Method Not Allowed' });
  }

  const data = JSON.parse(event.body);
  console.log(data);

  if (!data.token || parseInt(data.amount) < 1) {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Some required fields were not supplied.',
      }),
    });
  }

  stripe.charges
    .create({
      amount: parseInt(data.amount),
      currency: 'usd',
      description: 'Roxy shop',
      source: data.token,
      receipt_email: data.email,
      metadata: {
        "email": data.email,
        "items": data.metaData
      }
    })
    .then(({ status }) => {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify({ status }),
      });
    })
    .catch(err => {
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify({
          message: `Error: ${err.message}`,
        }),
      });
    });
};