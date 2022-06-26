// Create a variable below
var helloWorld = "Hello World!";

// Console.log() your variable here.
console.log(helloWorld);

$(".btn1").click(function(){
    window.location="https://github.com/KristenCushman/homework-19"
})



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


