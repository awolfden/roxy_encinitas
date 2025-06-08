const mailchimp = require("@mailchimp/mailchimp_marketing");

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { fname, lname, email } = JSON.parse(event.body);

    console.log("New user subscription request:", { fname, lname, email });

    // Configure Mailchimp
    mailchimp.setConfig({
      apiKey: process.env.API_KEY,
      server: process.env.SERVER_PREFIX,
    });

    const listId = process.env.LIST_ID;
    const subscribingUser = {
      firstName: fname,
      lastName: lname,
      email: email,
    };

    // Add user to Mailchimp list
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: subscribingUser.email,
      status: "subscribed",
      merge_fields: {
        FNAME: subscribingUser.firstName,
        LNAME: subscribingUser.lastName,
      },
    });

    console.log(
      `Successfully added contact as an audience member. The contact's id is ${response.id}.`
    );

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: JSON.stringify({
        status: 200,
        message: "Successfully subscribed to newsletter",
      }),
    };
  } catch (error) {
    console.error("Subscription error:", error);

    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: JSON.stringify({
        status: 500,
        error: "Failed to subscribe to newsletter",
      }),
    };
  }
};
