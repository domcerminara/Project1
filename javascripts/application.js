//Dominic Cerminara
//Send JSONP Request
$(function() {
   $('#submit').click(function() {                                   
    $.ajax({
      url: 'http://ws.audioscrobbler.com/2.0',
      data: {
        method: 'artist.getSimilar',
        autocorrect: '1', //Turns on autocorrecting
        limit: '3', //Gets top 3 results
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
   $("#artistinfo").html("<p> Since you like " + $("#artist").val() + ", you should check out <a href='http://"+ result.similarartists.artist[0].url + "' target='_blank'>" + result.similarartists.artist[0].name + "</a>, <a href='http://"+ result.similarartists.artist[1].url + "' target='_blank'>" + result.similarartists.artist[1].name + "</a>, and <a href='http://"+ result.similarartists.artist[2].url + "' target='_blank'>" + result.similarartists.artist[2].name + "</a> too!</p>");
};

