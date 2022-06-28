// Create a variable below
var helloWorld = "Hello World!";

// Console.log() your variable here.
console.log(helloWorld);

$(".btn1").click(function(){
    window.location="https://github.com/KristenCushman/homework-19"
})

window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TWSXWBTKZ4');

$("portfolioProjects").ready(function(){
  $("portfolioPorjects").click(function(){
    $("portfolioProjects").animate({
      left: '250px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });
  });
});


$(document).ready(function () {
    $("#flip").click(function () {
        $("#panel").slideDown("slow");
    });
});

$(document).ready(function () {
    $("#flip2").click(function () {
        $("#panel2").slideDown("slow");
    });
});

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-TWSXWBTKZ4');

$(document).ready(function () {
    $(".projectBloc").click(function () {
        $(".projectBloc").slideDown("slow");
    });
});

