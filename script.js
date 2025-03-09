const line = document.getElementById("text");
const textField = document.getElementById("field");
const button = document.querySelector("button");

function sampleFunction1() {
	const value = textField.value;
	if(value.length > 2) {
		line.textContent = value;
	}
	console.log(value);
}

button.addEventListener("click", sampleFunction1);

textField.addEventListener("keydown", function(e) {
	if(e.code == "Enter") {
		sampleFunction1();
	}
});