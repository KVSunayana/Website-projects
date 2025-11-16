"use strict";

var box=document.getElementById('box');
var clickCount = document.getElementById("click-count");
count=0;
box.addEventListener("click", function(){
	// "use strict";
	count++;
	demo=100;
	console.log(count);
	clickCount.innerText=count+" ";
})