// Jquery Starting Point
$(document).ready(function () {
  let quote;
  let author;

  function getNewQuote() {
    // api request
    $.ajax({
      url: "https://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp",
      },
      
      success: function(response) {
        text = response.quoteText;
        author = response.quoteAuthor;
          $('#text').text(text);
        if (author) {
          $("#author").text("said by " + author);
        } else {
          $("#author").text('- unknown');
        }
      }
    });
  }
    getNewQuote();
    
    $('#new-quote').on('click', function (event) {
        event.preventDefault();
        getNewQuote();
    })

    $('#tweet-quote').on('click', function (event) {
        event.preventDefault();
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(text))
    });
});
