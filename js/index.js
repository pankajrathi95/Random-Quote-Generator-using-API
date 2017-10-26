$(document).ready(function() {
  var myQuote;
  var myAuthor;
  $("#getQuote").click(function(){
    var colors = ['red', 'blue', 'green', 'grey', 'black', '#7087FF'];
     var randColor = colors[Math.floor(Math.random()*colors.length)];
    $("body").css("background-color",randColor);
    $(".quote, .author").css("color",randColor);
        $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
          myQuote = json.quoteText;
          myAuthor = json.quoteAuthor;
          $(".twitter_share").attr("href","https://twitter.com/intent/tweet?hashtags=awesomequotes&text="+encodeURIComponent(myQuote+' - '+myAuthor));
           $(".tumblr_share").attr("href","https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,&content="+encodeURIComponent(myQuote+' - '+myAuthor));
          
      $('.quote').html(json.quoteText);
      $('.author').html(json.quoteAuthor);               
}); 
  });  
});