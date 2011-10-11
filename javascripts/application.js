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
   //PHASE2var arr = result.similarartists.artist.image[3]; //Array object containg image url
   var name = result.similarartists.artist.name; //Name of similar artist
   $("#artistpic").html("<p> Since you like " + $("#artist").val() + ", you should check out " + name + " too!</p>");  
}

