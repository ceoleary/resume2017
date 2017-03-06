$(document).ready(function(){
  /* ------- Initialization ------ */
  $('.scrollspy').scrollSpy();
  $('#textarea1').trigger('autoresize');
  $('.carousel').carousel();
  $('.materialboxed').materialbox();
  //animation on load

  $("#js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "bounceIn",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 2000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });
  //if debug mode, true
  var debug = false;
  //rgb colors
  //var rgbNav = '38,198,218';
  var rgbNav = '63, 81, 181';

/* ------ Progress Bar ------ */
  var winHeight = $(window).height(),
        docHeight = $(document).height(),
        progressBar = $('progress'),
        max, value;

    /* Set the max scrollable area */
    max = docHeight - winHeight;
    progressBar.attr('max', max);

    $(document).on('scroll', function(){
       value = $(window).scrollTop();
       progressBar.attr('value', value);
    });

/* ---- Scroll Spy ------ */

    $(window).scroll(function(){
      if($(this).scrollTop() > 5 && $(this).scrollTop() < 100){
        var scrollNum = $(this).scrollTop();
        var a = scrollNum/50;
        $('nav').css({'background-color':'rgba('+rgbNav+','+a+')'});
        log('transition ' + a);
      }
      else if($(this).scrollTop() > 5)
      {
        //When the navbar is not at the top
         $('nav').css({'background-color':'rgba('+rgbNav+',1)'});
         log('scroll top');
      }
      else {
        //When the navbar is on the top
         $('nav').css({'background-color':'rgba('+rgbNav+',0)'});
         log('else');
      }
    });

    function log(text){
      if(debug == true){
        console.log(text);
      }
    }

    /* ---------------------------- */
    /* ------ Bubble Chart ------- */
    /* ---------------------------- */
    var bubbleChart = new d3.svg.BubbleChart({
    supportResponsive: true,
    //container: => use @default
    size: 600,
    //viewBoxSize: => use @default
    innerRadius: 600 / 3.5,
    //outerRadius: => use @default
    radiusMin: 50,
    //radiusMax: use @default
    //intersectDelta: use @default
    //intersectInc: use @default
    //circleColor: use @default
    data: {
      items: [
        {text: "HTML5", count: "236"},
        {text: "CSS3", count: "400"},
        {text: "PHP", count: "170"},
        {text: "JavaScript", count: "300"},
        {text: "jQuery", count: "400"},
        {text: "AJAX", count: "120"},
        {text: "JSON", count: "382"},
        {text: "mySQL", count: "10"},
        {text: "Photoshop", count: "170"},
      ],
      eval: function (item) {return item.count;},
      classed: function (item) {return item.text.split(" ").join("");}
    },
    plugins: [
      {
        name: "central-click",
        options: {
          text: "",
          style: {
            "font-size": "12px",
            "font-style": "italic",
            "font-family": "'Open Sans', sans-serif",
            "text-anchor": "middle",
            "fill": "white"
          },
          attr: {dy: "65px"},
          centralClick: function() {
            //make something exciting happen
            $(".bubbleChart").animate({  borderSpacing: -180 }, {
                  step: function(now,fx) {
                    $(this).css('-webkit-transform','rotate('+now+'deg)');
                    $(this).css('-moz-transform','rotate('+now+'deg)');
                    $(this).css('transform','rotate('+now+'deg)');
                  },
                  duration:'slow'
              },'linear');
          }
        }
      },
      {
        name: "lines",
        options: {
          format: [
            {// Line #1
              textField: "text",
              classed: {text: true},
              style: {
                "font-size": "14px",
                "font-family": "'Open Sans', sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "5px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            }
          ],
          centralFormat: [
            {// Line #0
              style: {"font-size": "50px"},
              attr: {}
            },
            {// Line #1
              style: {"font-size": "30px"},
              attr: {dy: "40px"}
            }
          ]
        }
      }]
  });
  });
