const redis =
require('redis');

const client =
redis.createClient();

client.connect();

module.exports = client;



/// cache example

// const cachedQuestions =
// await client.get('questions');

// if (cachedQuestions) {

//   return res.json(
//     JSON.parse(cachedQuestions)
//   );
// }