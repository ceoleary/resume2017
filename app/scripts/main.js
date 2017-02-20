$(document).ready(function(){
  //if debug mode, true
  var debug = true;
  //rgb colors
  var rgbNav = "238,110,115";

    $('.scrollspy').scrollSpy();
    $('#textarea1').trigger('autoresize');
    $('.carousel').carousel();

    $(window).scroll(function(){
      if($(this).scrollTop() > 5 && $(this).scrollTop() < 100){
        var scrollNum = $(this).scrollTop();
        var a = scrollNum/50;
        $('nav').css({"background-color":"rgba("+rgbNav+","+a+")"});
        log("transition " + a);
      }
      else if($(this).scrollTop() > 5)
      {
        //When the navbar is not at the top
         $('nav').css({"background-color":"rgba("+rgbNav+",1)"});
         log("scroll top");
      }
      else {
        //When the navbar is on the top
         $('nav').css({"background-color":"rgba("+rgbNav+",0)"});
         log("else");
      }
    });

    function log(text){
      if(debug == true){
        console.log(text);
      }
    }
  });
