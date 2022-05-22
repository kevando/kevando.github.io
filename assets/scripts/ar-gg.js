

function showClaimedState() {
	document.getElementById("reveal").style.visibility = "hidden";
	document.getElementById("DiscordBtn").innerHTML = "CLAIMED";
	document.getElementById("DiscordBtn").style.backgroundColor = "red";
	document.getElementById("DiscordBtn").style.transform = "rotate(15deg)";
}

document.getElementById("DiscordBtn").addEventListener("click", function() {
	// alert("yo")
	document.getElementById("DiscordBtn").innerHTML = "CLAIMING";
	setTimeout(() => {
		window.open("https://discord.gg/hUYwd6sJ");
		showClaimedState();
	}, 500);
});


window.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM fully loaded and parsed');
});


document.querySelector('#reveal').addEventListener('model-visibility', (event) => {
	console.log("Event", event);
	if (event.detail.visible === true) {
		document.querySelector('.model-container').classList.add("loaded");
		document.querySelector('#Loading').classList.add("loaded");

		setTimeout(function() {
			document.querySelector('.loading-container').style.display = "none";
		}, 500);
	}
	// ModelViewerStatic.minimumRenderScale = event.target.value;
	// minScale.textContent = event.target.value;
});
