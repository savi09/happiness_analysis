
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


// //////// Checking Data //////////////
//     d3.json('/data_pred').then(function (predData) {

//         console.log("*********", predData.pred[0].Country)
//         // console.log("****TEST*****", predData.country_predict[1].linear_predicted) 
    
//        });
// //////// END - Checking Data //////////////


// //////// Chart Test //////////////

// d3.json('/data_pred').then(function (predData) {


//      var ss = [];
//      var happy_ = [];

//      for (var key1 in predData.pred) {
//          ss.push(predData.pred[key1].linear_predicted);
//          happy_.push(predData.pred[key1].actual);
//          };

//       var traceBubble = {
//          x: happy_,
//          y: ss,
//          mode: 'markers',
//         type: 'scatter'
//      };
     
//      var traceDataBub = [traceBubble];
     
//      var bubbleLayout ={
//          // title: 'Happiness Score vs Suicide Rates by Country',
//          xaxis: {
//              title: 'Actual'},
//          yaxis: {
//              title: 'Linear Pred'}
//      };

     
//      Plotly.newPlot('bubble', traceDataBub, bubbleLayout, {responsive: true});

//    });

// //////// END - Chart Test //////////////



var dropdownMenu = d3.select("#selDataset");

// Give button access to the id's. 
function init() { 
  d3.json('/data_pred').then(function (predData) {

  //////// Country Drop down //////////////

    var ctry_nm = [];

     for (var key1 in predData.pred) {
         ctry_nm.push(predData.pred[key1].Country);
         };

      // console.log("ctry_nm");
      console.log(ctry_nm);

      ctry_nm.map((x) => { //defines the drop down menu
        dropdownMenu
          .append("option")
          .property("value", x)
          .text(x);
      });
      optionChanged(ctry_nm[0])

  //////// END - Country Drop down //////////////
  });
};

function optionChanged(selected_id) { 
  console.log("test", selected_id)

  d3.json('/data_pred').then(function (predData) {
    
    var pred_filt = predData.pred.filter(x => x.Country == selected_id);
    var trend_filt = predData.trend.filter(x => x.Country == selected_id);

    var t_year = [];
    var t_happiness = [];

     for (var key1 in trend_filt) {
        t_year.push(trend_filt[key1].year);
        t_happiness.push(trend_filt[key1].Happiness_Score);
         };

      // var actual = [];
      // var linear = [];
      // var svr = [];
      // var lasso = [];

      // for (var key1 in pred_filt) {
      //   actual.push(pred_filt[key1].Actual_Score);
      //   linear.push(trend_filt[key1].Linear_Reg_Prediction);
      //   svr.push(pred_filt[key1].SVR_Prediction);
      //   lasso.push(trend_filt[key1].Lasso_Prediction);
      //        };

      // console.log(t_year, t_happiness, actual, linear, svr, lasso)
      var trace1 = {
         x: t_year,
         y: t_happiness,
         mode: 'lines+markers',
        type: 'scatter'
     };
     
     var traceData1 = [trace1];

  //    var trace2 = {
  //     x: 'Predicted',
  //     y: linear,
  //     mode: 'markers',
  //    type: 'scatter'
  // };
  
  // var traceData2 = [trace2];
     
     var bubbleLayout ={
         // title: 'Happiness Score vs Suicide Rates by Country',
         xaxis: {
             title: 'Year'},
         yaxis: {
             title: 'Happiness Score'}
     };

    //  var all_trace = [traceData1, traceData2]
     
     Plotly.newPlot('bubble', traceData1, bubbleLayout, {responsive: true});

  });

};


init();