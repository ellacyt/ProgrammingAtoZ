console.log('The bot is starting');

const config = require('./config.js');
const Mastodon = require('mastodon-api');
const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const M = new Mastodon(config);

const cmd = 'processing-java --sketch=`pwd`/squares --run';

setInterval(toot, 5000);

function toot() {
  exec(cmd).
  then(response => {
    console.log(response.stdout);
    console.log(response.stderr);
    const stream = fs.createReadStream('squares/output.png');
    const media = {
      file: stream,
      description: 'A random square',
    };
    return M.post('media', media);
  }).
  then(response => {
    console.log(response.data.id);
    // fs.writeFilesSync('response.json',JSON.stringify(response, null, 2));
    const toot = {
      status: 'Kitten!',
      media_ids: [response.data.id]
    }
    return M.post('statuses',toot);
  }).
  then(response => {
    console.log("Success!");
    console.log(`id: ${response.data.id} at ${response.data.created_at}`);
    console.log("FINISHED!")
    const stream = fs.createReadStream('kitten.jpg');
    const media = {
    file: stream,
    description: 'A cute grey kitten holding a blanket found on google image',
  };
  }).
  catch(error => console.log(error));
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