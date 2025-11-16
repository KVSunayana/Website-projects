function sayHello() {
	// body...
	alert("Hello!!!");
}

function sayByee(){
	alert("Bubyee!!!");
}

var helloButton2 = document.getElementById('btn2');
helloButton2 = addEventListener("click", sayHello);
helloButton2 = addEventListener("click", sayByee);