var innerDiv = document.getElementById('inner');
innerDiv.addEventListener("click", function(event){
	console.log("click inner div");
	event.stopPropagation();
});

var outerDiv = document.getElementById('outer');
outerDiv.addEventListener("click", function(){
	console.log("click outer div");
});

document.addEventListener("click", function(){
	console.log("click document");
});