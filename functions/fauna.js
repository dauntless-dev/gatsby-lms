const fetch = require('node-fetch');

exports.faunaFetch = async ({ query, variables }) => {
  return await fetch('https://graphql.fauna.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer fnAD8jrpU0ACBOF9VeQPDQdmIKEL06pd3kLhUO1f`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.error(JSON.stringify(err, null, 2)));
};