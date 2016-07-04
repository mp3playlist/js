/*
var js = document.createElement("script");
js.type = "text/javascript";
js.src = "https://rawgit.com/mp3play/js/master/lib.js";
document.body.appendChild(js);
*/

function loadScript(url, callback) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onreadystatechange = callback;
    script.onload = callback;
    head.appendChild(script);
}
//var jquery_func = function() {};
//loadScript("//code.jquery.com/jquery-1.12.0.min.js", jquery_func);
var jwplayer_func = function() {};
loadScript("http://clip.amnhac.net/jwplayer/jwplayer.js", jwplayer_func);
var mp3playlist_ad_func = function() {};
loadScript("https://rawgit.com/mp3playlist/js/master/mp3playlist_ad.js", mp3playlist_ad_func);
var histats_func = function() {};
loadScript("https://rawgit.com/mp3playlist/js/master/histats.js", histats_func);
var dmca_func = function() {};
loadScript("https://rawgit.com/mp3playlist/js/master/dmca.js", dmca_func);
