const Mastodon = require('mastodon-api');
const util = require('util');
const fs = require('fs');
const exec = util.promisify(require('child_process').exec);

const config = require('./config.js');

console.log("Mastodon Bot starting...");

const M = new Mastodon(config)

const cmd = 'processing-java --sketch=`pwd`/gradientcolor --run';

const stream = M.stream('streaming/user');

stream.on('message', response => {
  if (response.event === 'notification' && response.data.type === 'mention') {
    const id = response.data.status.id;
    const acct = response.data.account.acct;
    //const content = response.data.status.content;

    toot(acct, id)
      .then(response => console.log(response))
      .catch(error => console.error(error));
  }
});

async function toot(acct, reply_id) {
    // Step 1: Get generate image with specified angle
    await exec(cmd);
    const stream = fs.createReadStream('gradientcolor/output.png');

    // Step 2: Upload Media
    const uploadParams = {
      file: stream,
      description: `A randomly generated gradient.`
    }
    const uploadResponse = await M.post('media', uploadParams);
    const mediaId = uploadResponse.data.id;

    // Step 3: Toot with image attached
    const tootParams = {
      status: `@${acct} gradient generated for you!`,
      in_reply_to_id: reply_id,
      media_ids: [mediaId]
    }
    await M.post('statuses', tootParams)
    return {
      success: true,
    };
  }
