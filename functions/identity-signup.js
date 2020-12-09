import stripeA from 'stripe';
import fetch from 'node-fetch'
;
const stripe = stripeA('sk_test_51Hw9TNEvMYDiC0OWuQaISYaxaGiwqwrftVEAg9yjlNLK2msqOKhVdXonhKBky8K4wKhlXi1PlhCJMA8VE6ooMBXW00nMNfhzUz');
const faunaFetch = async ({ query, variables }) => {
  return await fetch('https://graphql.fauna.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer fnAD8kcsWqACBnn2Dh-0DvnnayP7ITs8bv9vLLsA`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.error(JSON.stringify(err, null, 2)));
  }

exports.handler = async (event) => {
  // const { user1 } = JSON.parse(event.body);
  const user = {
    email: 'ramon.cora.amaya@gmail.com'
  };

  // create a new customer in Stripe

 const source =  await stripe.sources.create({
  type: 'ach_credit_transfer',
  currency: 'usd',
  owner: {
    email: user.email
    }
  });

 console.log(source);

  const customer = await stripe.customers.create({ email: user.email,  source: source.id });

  // subscribe the new customer to the free plan
  const subscription = await stripe.subscriptions.create({
    customer: customer.id,
    items: [{ price: 'price_1Hw9d4EvMYDiC0OWHU5spvLS' }],
  });


console.log(subscription);
  // store the Netlify and Stripe IDs in Fauna
  
  await faunaFetch({
    query: `
      mutation ($netlifyID: ID!, $stripeID: ID!) {
        createUser(data: { netlifyID: $netlifyID, stripeID: $stripeID }) {
          netlifyID
          stripeID
        }
      }
    `,
    variables: {
      netlifyID: customer.id,
      stripeID: customer.id,
    },
  });

  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     app_metadata: {
  //       roles: ['free'],
  //     },
  //   }),
  // };

  return {
    statusCode: 200,
    body: "oh yes"
  }
};