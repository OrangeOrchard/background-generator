const container = document.getElementById("text-container");
const textField = document.getElementById("field");
const button = document.querySelector("button");

function sampleFunction1() {
	const value = textField.value;
	
	if(value.length > 2) {
		const line = document.createElement("p");
		line.textContent = textField.value;
		container.append(line);
		
		textField.value = "";
		
		console.log(textField.value);
	} else if (value.length == 0) {
		alert("Please enter a value.");
	} else {
		alert("Please enter a different value.");
	}
}

button.addEventListener("click", sampleFunction1);

textField.addEventListener("keydown", function(e) {
	if(e.code == "Enter") {
		sampleFunction1();
	}
});