

 
 function image(x)
  {
	x = parseInt(x);
	if(x == 1)
	 {
		document.getElementById("pic").src = "21.png";
		document.getElementById(x).style.color = "#ffd700";
		
	 }
	else if (x == 2)
	 {
		document.getElementById("pic").src = "22.png";
		document.getElementById(x).style.color = "#ffd700";
		d
	 }
	else if (x == 3)
	 {
		document.getElementById("pic").src = "23.png";
		document.getElementById(x).style.color = "#ffd700";
		
	 }
	
  }
 
  function done(x)
  {
	
	document.getElementById("pic").src = "";
	if(parseInt(x) == 1)
	 {
		
		document.getElementById(x).style.color = "#FFFFFF";


	 }
	else if (x == "2")
	 {
		document.getElementById(x).style.color = "#FFFFFF";
	 }
	else if (x == "3")
	 {
		document.getElementById(x).style.color = "#FFFFFF";
	 }
	
  }
  
   
