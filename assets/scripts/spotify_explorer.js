function getParameterByName(name) {
	var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
	return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

const fetchJson = async fileName => (
	fetch(`${jsonFilePath}/${fileName}`).then(res => res.json())
);

const jsonFileNames = [
	// 'Identity', 
	// 'Inferences', 
	'Playlist1',
	'SearchQueries',
	'StreamingHistory0',
	'YourLibrary'
];
const jsonFilePath = '/assets/data/spotify_dump';
const dataFile = getParameterByName("dataFile");


async function createTable() {

	switch (dataFile) {

		case "Playlist1.json":

			document.title = dataFile;

			// Table Header
			var cols = ['Last Modified', 'Playlist', 'Track', 'Artist', 'Album'];
			var tr = document.createElement("tr");
			cols.forEach(col => {
				var td = document.createElement("td");
				td.style.fontWeight = "bold";
				td.textContent = col;
				tr.append(td);
			});
			document.querySelector("#DataTable thead").appendChild(tr);

			var tbody = document.querySelector("#DataTable tbody");

			var data = await fetchJson(dataFile);
			data.playlists.forEach(obj => {

				obj.items.forEach(item => {

					if (!item.track) {
						// dont display podasts
						return;
					}

					var tr = document.createElement("tr");

					function createCell(txt) {
						var td = document.createElement("td");
						td.textContent = txt;
						tr.append(td);
					}

					createCell(obj.lastModifiedDate);
					createCell(obj.name);
					createCell(item.track.trackName);
					createCell(item.track.artistName);
					createCell(item.track.albumName);

					tbody.appendChild(tr);

				});

			});

			break;

		case "SearchQueries.json":
			document.title = dataFile;
			var searchQueries = await fetchJson(dataFile);
			searchQueries.forEach(sq => {
				var tr = document.createElement("tr");
				var cols = ['platform', 'searchTime', 'searchQuery'];
				cols.forEach(col => {
					var td = document.createElement("td");
					td.textContent = sq[col];
					tr.append(td);
				});
				document.querySelector("#DataTable tbody").appendChild(tr);
			});
			break;

		case "StreamingHistory0.json":

			// Page Title
			document.title = dataFile;

			// Table Header
			var cols = ['endTime', 'artistName', 'trackName', 'msPlayed'];
			var tr = document.createElement("tr");
			cols.forEach(col => {
				var td = document.createElement("td");
				td.style.fontWeight = "bold";
				td.textContent = col;
				tr.append(td);
			});
			document.querySelector("#DataTable thead").appendChild(tr);

			// Table Data
			var data = await fetchJson(dataFile);

			data.forEach(obj => {
				var tr = document.createElement("tr");
				cols.forEach(col => {
					var td = document.createElement("td");
					td.textContent = obj[col];
					tr.append(td);
				});
				document.querySelector("#DataTable tbody").appendChild(tr);
			});
			break;
		case "YourLibrary.json":

			// !!!! Only Artists for now

			// Page Title
			document.title = dataFile;

			// Table Header
			var cols = ['name'];
			var tr = document.createElement("tr");
			cols.forEach(col => {
				var td = document.createElement("td");
				td.style.fontWeight = "bold";
				td.textContent = col;
				tr.append(td);
			});
			document.querySelector("#DataTable thead").appendChild(tr);

			// Table Data
			var data = await fetchJson(dataFile);

			data.artists.forEach(obj => {
				var tr = document.createElement("tr");
				cols.forEach(col => {
					var td = document.createElement("td");
					td.textContent = obj[col];
					tr.append(td);
				});
				document.querySelector("#DataTable tbody").appendChild(tr);
			});

			break;

		default:
			break;
	}

	console.log("done");
	return;


}


// Table UI

const isBrowserSupported = 'content' in document.createElement('template');
if (isBrowserSupported) {

	createTable().then(function() {
		console.log("yo");
		document.getElementById("Loading").classList.add("pause");
		setTimeout(function() {
			document.getElementById("Loading").classList.add("paused");
			document.getElementById("DataTable").style.visibility = "visible";
		}, 200);
	});

}