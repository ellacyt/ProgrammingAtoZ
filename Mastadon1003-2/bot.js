console.log('The bot is starting');

const config = require('./config.js');
const Mastodon = require('mastodon-api');
const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const M = new Mastodon(config);

const cmd = 'processing-java --sketch=`pwd`/squares --run';

toot().
then(response => {
  console.log(response);
}).
catch(error => console.log(error));

//setInterval(toot, 5000);

async function toot() {
  //Step 1: Run Processing
  const response1 = await exec(cmd);
  console.log(response1.stdout);

  //Step 2: Post media
  const stream = fs.createReadStream('squares/output.png');
  const media = {
      file: stream,
      description: 'A random square',
  };
  const response2 = await M.post('media', media);

  //Step 3: Post status 
  const toot = {
      status: 'squares!',
      media_ids: [response2.data.id]
  };
  const response3 = await M.post('statuses', toot);

  console.log("Success!");
  console.log(`id: ${response.data.id} at ${response.data.created_at}`);
  console.log("FINISHED!")
}


// toot();

// setInterval(toot, 1000*60*5);

// function toot(){

//   const num = Math.floor(Math.random()*100);
//   const params = {
//     spoiler_text: "The meaning of life is...",
//     status: num
//   }

// M.post('statuses',params).
//   then(response => {
//   console.log("Success!");
//   console.log(`id: ${response.data.id} at ${response.data.created_at}`);
// }).
//   catch(error => {
//   console.log("OOPS");
//   console.error(error);
// });

// M.post('statuses', params, (error,data) => {
// if (error) {
//   console.log("OOPS");
//   console.error(error);
// } else {
//   console.log("Success!");
//   console.log(`id: ${data.id} at ${data.created_at}`);
// }
// });