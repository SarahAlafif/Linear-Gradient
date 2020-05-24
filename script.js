var blueButton = document.querySelector(".color1");
var redButton = document.querySelector(".color2");
var body = document.querySelector("body");
var h3 = document.querySelector("h3");

function gradient(){
    body.style.background ="linear-gradient(to right,"+blueButton.value +"," + redButton.value +")";
    h3.textContent = body.style.background + ";";
}

blueButton.addEventListener("input", gradient);

redButton.addEventListener("input", gradient);
