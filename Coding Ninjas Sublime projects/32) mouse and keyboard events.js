var outerDiv = document.getElementById('outer');
outer.addEventListener("mouseover", function(){
	console.log("Mouse over");
});

outer.addEventListener("mouseout", function(){
	console.log("Mouse out");
});

var searchInput = document.getElementById("search");
searchInput.addEventListener("keypress", function(){
	console.log("Key Pressed");
});

document.addEventListener("keydown", function(event){
	console.log("Key down", event.keyCode);
});

document.addEventListener("keypress", function(event){
	console.log("Key Pressed", event.keyCode);
});