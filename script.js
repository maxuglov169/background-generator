var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

function changeColor() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background;
}

changeColor();

const randomColor = () =>  {
	var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
	return randomColor;
}

function assignRandomColors() {
	color1.value = randomColor();
	color2.value = randomColor();
	changeColor();
}

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);
random.addEventListener("click", assignRandomColors);