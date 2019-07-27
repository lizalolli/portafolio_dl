$(function(){
  $("a").click(function(event){
    if (this.hash !=="") {
      event.preventDefault();
      var navHeight = $("#navbar").height() * 2;
      var gato = this.hash;
      $("html").animate({
        scrollTop: $(gato).offset().top - navHeight
      }, 800);
      window.location.hash = gato;
    }
 });