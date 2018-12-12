console.log('background running');

chrome.runtime.onMessage.addListener(receiver);

var word;

function receiver(request, sender, sendResponse) {
  console.log(request);
  word = request.word;
}