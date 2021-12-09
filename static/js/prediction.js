
//////// Title Animation //////////////
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  //////// END - Title Animation //////////////


//////// Checking Data //////////////
    d3.json('/data_pred').then(function (predData) {

        console.log("*********", predData.pred[0].actual)
        // console.log("****TEST*****", predData.country_predict[1].linear_predicted) 
    
       });
//////// END - Checking Data //////////////


//////// Chart Test //////////////

d3.json('/data_pred').then(function (predData) {


     var ss = [];
     var happy_ = [];

     for (var key1 in predData.pred) {
         ss.push(predData.pred[key1].linear_predicted);
         happy_.push(predData.pred[key1].actual);
         };

      var traceBubble = {
         x: happy_,
         y: ss,
         mode: 'markers',
        type: 'scatter'
     };
     
     var traceDataBub = [traceBubble];
     
     var bubbleLayout ={
         // title: 'Happiness Score vs Suicide Rates by Country',
         xaxis: {
             title: 'Actual'},
         yaxis: {
             title: 'Linear Pred'}
     };

     
     Plotly.newPlot('bubble', traceDataBub, bubbleLayout, {responsive: true});

   });

//////// END - Chart Test //////////////