String.prototype.replaceChars = function(character, replacement){
    var str = this;
    var a;
    var b;
    for(var i=0; i < str.length; i++){
        if(str.charAt(i) == character){
            a = str.substr(0, i) + replacement;
            b = str.substr(i + 1);
            str = a + b;
        }
    }
    return str;
}
 
function search(query){
    switch(query.substr(0, 2)){
            case ">y":
                query = query.substr(3);
                window.open("https://www.google.com/search?tbm=isch&q=" + query.replaceChars(" ", "+"),'_blank')
                break;
	    default:
    switch(query){
            case "ytdl": case "yt2mp3": case "mp3":
                window.open("http://ytdl.iiyu.de/",'_blank')
                break;
            
            case "cloud": case "storage":
                window.open("http://cloud.iiyu.de/",'_blank')
                break;
            
            case "file": case "share":
                window.open("http://share.iiyu.de/",'_blank')
                break;
            
            case "speed": case "speedtest":
                window.open("http://speed.iiyu.de/",'_blank')
                break;
            
            case "stream": case "jellyfin":
                window.open("http://stream.iiyu.de/",'_blank')
                break;
        
            default:
            window.open("https://www.google.de/search?q=" + query.replaceChars(" ", "+"),'_blank')
		    
    }
    }
}
 
window.onload = function(){
    searchinput = document.getElementById("search");
    if(!!searchinput){
        searchinput.addEventListener("keypress", function(a){
            var key = a.keyCode;
            if(key == 13){
                var query = this.value;
                search(query);
            }
        });
    }
 
    var search_sqr = document.getElementById("search_sqr");
 
        }


		<a href="http://cloud.iiyu.de" target="_blank"><button class="xbtn">CLOUD</button></a><br>
		<a href="http://share.iiyu.de" target="_blank"><button class="xbtn">Y-Share</button></a><br>
		<a href="http://speed.iiyu.de" target="_blank"><button class="xbtn">Speedtest</button></a><br>
		<a href="http://stream.iiyu.de" target="_blank"><button class="xbtn">Media</button></a><br>
