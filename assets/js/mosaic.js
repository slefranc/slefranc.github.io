function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

var el = document.getElementById("main");
el.style.width = "100%";
el.style.margin = "0";
el.style.padding = "0";
el.style.maxWidth = "100%";
$( "article" ).each(function( index ) {
  this.style.width = "100%";
  this.style.padding = "0";
});

var allImages = "";
if (window.matchMedia("(max-width: 700px)").matches) {
    var nb_images = 3;
}
else {
    var nb_images = 20;
}
var refresh = 1000;
var items = range(1, 117);


$('#photos').append(
    '<iframe id="frame" frameBorder=0 width=100% height=100% style="position:absolute;top:0px;z-index:-1"></iframe>');
var frame = $('#frame')[0];
var currentZoom = window.devicePixelRatio;
$(frame.contentWindow).resize(function() {
    //console.log('zoom', window.devicePixelRatio);
    if (currentZoom != window.devicePixelRatio) {
        window.location.reload(); 
    }
    currentZoom = window.devicePixelRatio;
});


for (var i = 1; i <= nb_images; i++) {
  var random_i = items[Math.floor(Math.random() * items.length)]
  allImages += '<img id="im' + i + '" src="../images/gallery/' + random_i +
               '.jpg" style="object-fit: cover;">';
}
$('#photos').append(allImages);

setInterval(function() {
  var timestamp = new Date().getTime(); 
  var random_i = items[Math.floor(Math.random() * nb_images)]
  var el = document.getElementById("im" + random_i);
  var random_i = items[Math.floor(Math.random() * items.length)]
  var queryString = "?t=" + timestamp;
  el.style.width = el.clientWidth + "px";
  el.style.height = el.clientHeight + "px";
  el.src = "../images/gallery/" + random_i + ".jpg" + queryString;
}, refresh);

