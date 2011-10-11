//Dominic Cerminara
//Send JSONP Request
$(function() {
   $('#submit').click(function() {                                   
    $.ajax({
      url: 'http://ws.audioscrobbler.com/2.0',
      data: {
        method: 'artist.getSimilar',
        autocorrect: '1', //Turns on autocorrecting
        limit: '1', //Gets top result
        artist: $("#artist").val(),
        format: 'json',
        api_key: '028a648a94b5ca3a256ed241d7952a20',
        callback: "displayResult"
      },
      dataType: 'jsonp'
    });
    
    return false;
  });
});

//Adds result to HTML
function displayResult(result) {
   console.log(result);
   var name = result.similarartists.artist.name; //Name of similar artist
   $("#artistinfo").html("<p> Since you like " + $("#artist").val() + ", you should check out <a id='show' href='http://"+ result.similarartists.artist.url +"'>" + name + "</a> too!</p>");
};

