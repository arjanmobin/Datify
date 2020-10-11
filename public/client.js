function doClientShit() {
    var access_token = getHashParams().access_token
    
    $.ajax({
        url: 'https://api.spotify.com/v1/me/top/tracks',
        headers: {
          'Authorization': 'Bearer ' + access_token
        },
        success: function(response) {

            response.items.forEach(song => {
                $("#top-songs").append(`<p>${song.name}</p>`)     
            });
        }
    });
    
    
    function getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
      }
}


