console.log('The bot is starting');

const config = require('./config.js');
const Mastodon = require('mastodon-api')
const M = new Mastodon(config);

//console.log(M);

toot();

setInterval(toot, 1000*60*5);

function toot(){

  const num = Math.floor(Math.random()*100);
  const params = {
    spoiler_text: "The meaning of life is...",
    status: num
  }

M.post('statuses', params, (err,data) => {
if (err) {
  console.log("OOPS");
  console.error(err);
} else {
  console.log("Success!");
  console.log(`id: ${data.id} at ${data.created_at}`);
}
});

}
