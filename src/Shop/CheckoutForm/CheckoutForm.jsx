import React, { useState } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

function CheckoutForm({ stripe, totalCost, metaData }) {
  const [status, setStatus] = useState('default');
  console.log(metaData);
  let billing_details = {
      "address": {
        "city": null,
        "line1": null,
        "postal_code": "11111",
        "state": null
      },
      "email": null,
      "name": null    
  }

  const setDetails = (e) => {
    if(e.target.placeholder === "name"){
      billing_details.name = e.target.value;
    } else if (e.target.placeholder === "email"){
      billing_details.email = e.target.value;
    } else if (e.target.placeholder === "city"){
      billing_details.address.city = e.target.value;
    } else if (e.target.placeholder === "address"){
      billing_details.address.line1 = e.target.value;
    } else if (e.target.placeholder === "zip code"){
      billing_details.address.postal_code = e.target.value;
    } else if (e.target.placeholder === "state"){
      billing_details.address.state = e.target.value;
    }
    
    // custName = e.target.value;
    //console.log(billing_details);
  }

  const submit = async e => {
    e.preventDefault();
    console.log(e.target);
    setStatus('submitting');

    try {
      let { token } = await stripe.createToken({
          "address_city": billing_details.address.city,
          "address_line1": billing_details.address.line1,
          "address_zip": billing_details.address.postal_code,
          "address_state": billing_details.address.state,
          "name": billing_details.name   
      });

      let response = await fetch('/.netlify/functions/charge', {
        method: 'POST',
        body: JSON.stringify({
          amount: totalCost * 100,
          token: token.id,
          email: billing_details.email,
          metaData: metaData
        }),
      });

      console.log(response);

      if (response.ok) {
        setStatus('complete');
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'complete') {
    return <div className="CheckoutForm-complete"><p>Payment successful!</p><br/><p>You will receive your receipt via email within 24 hours.</p></div>;
  }

  return (
    <form className="CheckoutForm" onSubmit={submit}>
      <h4>Would you like to complete the purchase?</h4>
      <input className="checkout-input" type="text" placeholder="name" required onChange={setDetails}/><br/>
      <input className="checkout-input" type="text" placeholder="address" required onChange={setDetails}/><br/>
      <input className="checkout-city" type="text" placeholder="city" required onChange={setDetails}/>
      <input className="checkout-state" type="text" placeholder="state" required onChange={setDetails}/>
      <input className="checkout-zip" type="text" placeholder="zip code" required onChange={setDetails}/><br/>
      <input className="checkout-input" type="text" placeholder="email" required onChange={setDetails}/>
      <CardElement />
      <button
        className="CheckoutForm-button"
        type="submit"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Submitting' : 'Submit Order'}
      </button>
      {status === 'error' && (
        <div className="CheckoutForm-error">Something went wrong.</div>
      )}
    </form>
  );
}

export default injectStripe(CheckoutForm);