var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
for(var i=0; i<navMenuAnchorTags.length; i++){
	navMenuAnchorTags[i].addEventListener('click', function(event) {
		// body...
		event.preventDefault();
		var targetSectionID=this.textContent.trim().toLowerCase();
		var targetSection=document.getElementById(targetSectionID);
		var interval=setInterval(function() {
			// body...
			var targetSectionCoordinates=targetSection.getBoundingClientRect();
			if (targetSectionCoordinates.top<=0){
				clearInterval(interval);
				return;
			}
			window.scrollBy(0,50);
		},20);
	});
}

var progressBars=document.querySelectorAll(".skills-progress > div");
var skillsContainer=document.getElementById("skills-container");
var animationDone=false;
window.addEventListener("scroll",checkScroll);

function initialiseBars(){
	for (let bar of progressBars){
		bar.style.width=0+"%";
	}
}
initialiseBars();

function checkScroll(){
	// checking whether the skill container is visible
	var coordinates= skillsContainer.getBoundingClientRect();
	if (!animationDone && coordinates.top <= window.innerHeight){
		animationDone=true;
		console.log("skills section visible");
		fillBars();
	}
	else if (coordinates.top > window.innerHeight){
		animationDone=false;
		initialiseBars();
	}
}

function fillBars(){
	for (let bar of progressBars){
		let targetWidth=bar.getAttribute("data-bar-width");
		let currentWidth=0;
		let interval=setInterval(function(){
			if (currentWidth > targetWidth){
				clearInterval(interval);
				return;
			}
			currentWidth++;
			bar.style.width=currentWidth+"%";
		},3);
	}
}