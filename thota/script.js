

var Matches = [193,167,144];
var Runs = [7007,5002,6880];
var rbi = [137,138,47];


function calc()
 {
	var ab = parseInt(document.getElementById("myAb").value);
	var Matches = parseInt(document.getElementById("myMatches").value);
	var avg = Matches/ab;
	
	document.getElementById("myAvg").innerHTML = avg.toFixed(3);
	
 }
 
 function image(x)
  {
	x = parseInt(x);
	if(x == 1)
	 {
		document.getElementById("pic").src = "1.jpg";
		document.getElementById(x).style.color = "#ffd700";
		document.getElementById("hit").innerHTML = Matches[x-1];
		document.getElementById("hr").innerHTML = Runs[x-1];
		document.getElementById("rbi").innerHTML = rbi[x-1];
	 }
	else if (x == 2)
	 {
		document.getElementById("pic").src = "2.jpg";
		document.getElementById(x).style.color = "#ffd700";
		document.getElementById("hit").innerHTML = Matches[x-1];
		document.getElementById("hr").innerHTML = Runs[x-1];
		document.getElementById("rbi").innerHTML = rbi[x-1];
	 }
	else if (x == 3)
	 {
		document.getElementById("pic").src = "3.jpg";
		document.getElementById(x).style.color = "#ffd700";
		document.getElementById("hit").innerHTML = Matches[x-1];
		document.getElementById("hr").innerHTML = Runs[x-1];
		document.getElementById("rbi").innerHTML = rbi[x-1];
	 }
	
  }
 
  function done(x)
  {
	
	document.getElementById("pic").src = "";
	if(parseInt(x) == 1)
	 {
		
		document.getElementById(x).style.color = "#000000";


	 }
	else if (x == "2")
	 {
		document.getElementById(x).style.color = "#000000";
	 }
	else if (x == "3")
	 {
		document.getElementById(x).style.color = "#000000";
	 }
	
  }
  
   
function displayDate(){
document.getElementById("datetime").innerHTML=Date();
}