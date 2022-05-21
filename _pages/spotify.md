---
layout: default
title: My Spotify JSON
description: o rly?  👀
permalink: /spotify
---

<header>
	<h1><span class="loading" id="Loading">🎤</span>My Spotify JSON </h1>
	<nav class="buttons" id="Nav"></nav>
</header>

<br>


<table id="DataTable" style="visibility:hidden">
  <thead></thead>
  <tbody></tbody>
</table>


<script src="/assets/scripts/spotify_explorer.js?cachedz=7"></script>

<script type="text/javascript">

  // Nav UI

const makeLink = function(filename) {
	var $link = document.createElement("a");
	$link.innerHTML = filename;
	$link.href = "/spotify?dataFile=" + filename + ".json";
	return $link;
};

const $links = jsonFileNames.map(makeLink);

$links.forEach($link => {
	document.getElementById("Nav").prepend($link);
});


</script>