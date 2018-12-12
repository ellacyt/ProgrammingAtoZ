function setup() {
  noCanvas();

  var word = chrome.extension.getBackgroundPage().word;
  let input = word 
  let input = select('#input');
  createP(word)

  $(window).ready(

    function () {
        $('#split').on('click', function () {
            $(".teasers").html("");
            var summarizer = new JsSummarize(
              {
                returnCount: 3
              });
            var summary = summarizer.summarize($('#title').val(),$('#input').val());
            summary.forEach(function(sentence)
            {
                $(".teasers").append("<li>"+sentence+"</li>");
            });
            $(".title").text($("#title").val());
        });

    });
}

  // And update the DOM to show the definition
// function buttonPressed() {
//     console.log("pressed buttonPressed");
//     var keyword = select('#title');
//     word = select('#teasers');
//     word.html(text);
//     var summarizer = new JsSummarize({returnCount: 3});
//     var summary = summarizer.summarize(keyword, word);
//     summary.forEach(function(sentence){
//     $(".teasers").append("<li>"+sentence+"</li>");
//     });
//     keyword.html(text);
// }