//VARIABLES
var addItem = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteButtons = document.getElementsByClassName("delete");

//CREATING LIST ITEMS
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var button = document.createElement("button");
	button.innerHTML = "X";
	var button = li.appendChild(button);
	button.onclick=removeParent;
}

function inputLength() {
	return input.value.length;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//REMOVING LIST ITEMS
for(var i=0; i < deleteButtons.length; i++) {
	deleteButtons[i].addEventListener("click", removeParent, false);
}

function removeParent(e) {
	e.target.removeEventListener("click", removeParent, false);
	e.target.parentNode.remove();
}


//ADDING STRIKETHROUGH - VIA https://davidwalsh.name/event-delegate
document.getElementById("list").addEventListener("click", function(e) {
	if (e.target && e.target.nodeName == "LI") {
		e.target.classList.toggle("done");
	}
});



//EVENT LISTENERS
addItem.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

