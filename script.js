var historyData = [];
var expressionData = "";
var resultData = "";

function disply(val) {

  document.getElementById("display-input").value += val;
  expressionData = val;
}
function solve() {
  let x = document.getElementById("display-input").value;
  expressionData = x;
  // var splitUp = x.match(/[^\d()]+|[\d.]+/g);
  // console.log(x)
  let y = eval(x);
  document.getElementById("display-input").value = y;
  resultData = y;
  if (historyData.length < 20) {
    historyData.push({ expression: expressionData, result: resultData });
    // console.log('historyData',historyData)
  } else {
    null;
  }
  showLogData();
  resultData = "";
  expressionData = "";
}
function clr() {
  document.getElementById("display-input").value = " ";
}
function showLogData() {
  var log = document.getElementById("historyLog");
  var string = "";
  
  for (var key in historyData)
    string +=
      "" +
      historyData[key]["expression"] +
      " = " +
      historyData[key]["result"] +
      "<br>";
  log.innerHTML = string;
}
function clearHistory() {
  historyData = [];
  document.getElementById("historyLog").innerHTML = " ";
}
$("#display-input").keypress(function (e) {
  let key = e.which;
  let checkValues = document.getElementById("display-input").value;

  if (key == 13 && checkValues) {
    // the enter key code
    solve();
  }
});