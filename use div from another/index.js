var myDivId = "myDiv";
var myFrame = document.getElementById("myFrame");
myFrame.src = "source.html?id=" + myDivId;

var divId = new URLSearchParams(window.location.search).get("id");
var myDiv = document.getElementById(divId);
document.body.appendChild(myDiv);