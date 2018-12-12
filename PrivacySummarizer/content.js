console.log("Chrome extension go");

window.addEventListener('mouseup', selectedText);

function selectedText() {
  console.log('word selected')

  var selected = window.getSelection().toString();

  console.log(selectedText);

  if(selected.length > 0){
    chrome.runtime.sendMessage({"word": selected});
  }
}