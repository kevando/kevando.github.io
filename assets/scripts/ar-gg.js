

function showClaimedState() {
	document.getElementById("reveal").style.visibility = "hidden";
	document.getElementById("DiscordBtn").innerHTML = "CLAIMED"
	document.getElementById("DiscordBtn").style.backgroundColor = "red";
	document.getElementById("DiscordBtn").style.transform = "rotate(15deg)";
}

document.getElementById("DiscordBtn").addEventListener("click", function() {
	// alert("yo")
	document.getElementById("DiscordBtn").innerHTML = "CLAIMING"
	setTimeout(() => {
		window.open("https://discord.gg/hUYwd6sJ");
		showClaimedState()
	}, 500);
});


window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});