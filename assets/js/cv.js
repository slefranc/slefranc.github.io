var el = document.getElementById("main");
el.style.width = "100%";
el.style.margin = "0";
el.style.padding = "0";
el.style.maxWidth = "100%";
$(".sidebar").css("margin-left", "20px")
$(".sidebar").css("margin-right", "0px")
$( "article" ).each(function( index ) {
  this.style.padding = "0";
});
