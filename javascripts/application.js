//Send JSONP Request
$('#submit').click(function() {Request.JSONP({
url: 'http://ws.audioscrobbler.com/2.0',
method: 'getSimilar',
data: {
  limit: '1',
  artist: #artist.value,
  api_key: '028a648a94b5ca3a256ed241d7952a20'
  }
}).send()});

