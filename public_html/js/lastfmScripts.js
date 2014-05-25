/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function getCover(artist, album, id) {
    $.ajax({
        url: 'http://ws.audioscrobbler.com/2.0/?method=album.getInfo&artist=' + artist +'&album=' + album + '&api_key=641eb2141e3a81eac59fffb37be974a5&format=json',
            success: function(data) {
                console.log(data);
                var sPic = data.album.image[1]["#text"];
                console.log(data);
                var imageDiv = document.getElementById("cover" + id);
                imageDiv.src = sPic;
        }});
}
   