// smooch.js adds kisses to the page

const BASE_SIZE = 1.5;

// Initialize
document.addEventListener("DOMContentLoaded", function(event) {
	document.addEventListener("click", _smooch);
	addFirstKiss();
});

function addFirstKiss() {

	const kiss = document.createElement("span");
	const lipstick = document.createTextNode("💋");

	kiss.appendChild(lipstick);

	kiss.id = "Kiss";

	kiss.style.position = "absolute";
	kiss.style.left = "50px";
	kiss.style.top = "20px";
	kiss.style.fontSize = BASE_SIZE + "em";

	document.body.prepend(kiss);
}

function _smooch(event) {
	function clone(el) {
		var cloned = el.cloneNode(true);
		cloned.id = 'Kiss-' + Math.random();
		return cloned;
	}

	// Create Kiss
	var kiss = document.querySelector('#Kiss');
	var kissed = clone(kiss);

	// Append Kiss to DOM
	kiss.after(kissed);

	// Set Kiss Position
	kissed.style.top = (event.layerY - 20) + "px";
	kissed.style.left = (event.layerX - 20) + "px";

	// Randomize Size
	var randomSize = Math.random() + BASE_SIZE;

	kiss.style.fontSize = randomSize + "em";
}

// const container = document.getElementById("container");
// const template = document.getElementById("template");

// function clickHandler(event) {
//   event.target.append(" — Clicked this div");
// }

// const firstClone = template.content.cloneNode(true);
// firstClone.addEventListener("click", clickHandler);
// container.appendChild(firstClone);

// const secondClone = template.content.firstElementChild.cloneNode(true);
// secondClone.addEventListener("click", clickHandler);
// container.appendChild(secondClone);