var randomNum;
var input;
function randomNumGenerator(){
	randomNum = Math.floor(Math.random()*41) - 20;
	document.getElementById("num").innerHTML = randomNum;
	guessName();
	print();
}
function guessName() {
	input = parseInt(document.getElementById("guess").value);	
}
function print(){
	if(Math.abs(randomNum - input) <= 5){
		document.getElementById("respond").innerHTML = "Hot";
	}
	else{
		document.getElementById("respond").innerHTML = "Cold";
	}
}
