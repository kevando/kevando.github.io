

// function showClaimedState() {
// 	document.getElementById("reveal").style.visibility = "hidden";
// 	document.getElementById("DiscordBtn").innerHTML = "CLAIMED";
// 	document.getElementById("DiscordBtn").style.backgroundColor = "red";
// 	document.getElementById("DiscordBtn").style.transform = "rotate(15deg)";
// }

// document.getElementById("DiscordBtn").addEventListener("click", function() {
// 	// alert("yo")
// 	document.getElementById("DiscordBtn").innerHTML = "CLAIMING";
// 	setTimeout(() => {
// 		window.open("https://discord.gg/hUYwd6sJ");
// 		showClaimedState();
// 	}, 500);
// });


window.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM fully loaded and parsed');

});

setTimeout(function() {
	// alert("2");
	document.querySelector('.update-bar').classList.add("loaded");
}, 500);

setTimeout(function() {
	// // alert("2");
	document.querySelector('.forging-container').classList.add("hide");
	document.querySelector('.loading-container').classList.add("hide");
	document.querySelector('.spotlight').classList.remove("hide");

	document.querySelector('.btn-container').classList.remove("hide");

	document.querySelector('.zapper').classList.add("loaded");
	document.querySelector('#Loading').classList.add("loaded");
}, 5000);

document.querySelector('#reveal').addEventListener('model-visibility', (event) => {
	console.log("Event", event);
	if (event.detail.visible === true) {
		// Model is loaded
	}
	// ModelViewerStatic.minimumRenderScale = event.target.value;
	// minScale.textContent = event.target.value;
});


