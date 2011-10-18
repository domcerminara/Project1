//Dominic Cerminara

//Send JSONP Request when submit is clicked
$(function() {
   $('#submit').click(function() {  
    //reset fields                                 
    $("#error").html("");
    $("#artistinfo").html("");    
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
   if(result.error != null) //if artist entered could not be found
   {
      $("#error").html("The artist you requested could not be found. Please try again.");
   }
   else
   {
      $("#artistinfo").html("<p>Since you like " + $("#artist").val()//Artist name that was typed in
       + ", you should check out <a href='http://"+ result.similarartists.artist[0].url //first artist's url
       + "' target='_blank'>" + result.similarartists.artist[0].name //first artist's name
       + "</a>, <a href='http://"+ result.similarartists.artist[1].url //second artist's url 
       + "' target='_blank'>" + result.similarartists.artist[1].name //second artist's name
       + "</a>, and <a href='http://"+ result.similarartists.artist[2].url //third artist's url
       + "' target='_blank'>" + result.similarartists.artist[2].name //third artist's name 
       + "</a> too!</p>");
   }   
};

