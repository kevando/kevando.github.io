// globalvariables.js

var urls = {
  map: "us-geo.json",
  unitedStates: "united-states.tsv"
};

var svg = d3.select("#main");
var tooltip = d3.select("text#tooltip");

var path = d3.geoPath();

var g = {
  basemap: svg.select("g#basemap")
  // airports: svg.select("g#flights"),
};

// must be hard-coded to match our topojson projection
// source: https://github.com/topojson/us-atlas
var projection = d3
  .geoAlbers()
  .scale(1280)
  .translate([480, 300]);

var scales = {
  // used to scale airport bubbles
  airports: d3.scaleSqrt().range([4, 18]),
  states: d3.scaleSqrt().range([4, 18])
};

// Load data
Promise.all([
  d3.json(urls.map),
  d3.tsv(urls.unitedStates, typeUnitedStates)
  // d3.tsv(urls.unitedStates, typeUnitedStates), // place holder for connections
]).then(processData);

function processData(values) {
  console.assert(values.length === 2);

  let map = values[0];
  let unitedStates = values[1];
  // let flights = values[1];

  drawMap(map, unitedStates);
  // drawAirports(airports);
}

function drawMap(map, unitedStates) {
  var topoFeatureData = topojson.feature(map, map.objects.states).features;

  topoFeatureData.forEach(function(geoState) {
    var stateData = unitedStates.find(function(us_state) {
      return parseInt(geoState.id) === us_state.id;
    });

    if (stateData) {
      geoState.key = stateData.id; // not needed
      geoState.properties = stateData;
    }
  });

  g.basemap
    .attr("class", "states")
    .selectAll("path")
    .data(topoFeatureData)
    .enter()
    .append("path")
    .attr("class", function(d) {
      return d.properties.color;
    })
    .on("mouseover", handleMouseOverState)
    .on("mouseout", handleMouseOutState)
    .attr("d", path);

  g.basemap
    .append("path")
    .attr("class", "state-borders")
    .attr(
      "d",
      path(
        topojson.mesh(map, map.objects.states, function(a, b) {
          return a !== b;
        })
      )
    );
}

function handleMouseOverState(d, i) {
  // Highlight state outline
  d3.select(this).classed("active", true);

  var stateData = d.properties;
  if (stateData) {
    // make tooltip take up space but keep it invisible
    tooltip.style("display", null);
    tooltip.style("visibility", "hidden");
    tooltip.attr("text-anchor", "middle");
    tooltip.attr("dy", -scales.states(0) - 4);
    tooltip.attr("x", stateData.x);
    tooltip.attr("y", stateData.y);
    tooltip.text(stateData.name);
    tooltip.style("visibility", "visible");
  }
}

function handleMouseOutState(d, i) {
  // Add interactivity
  d3.select(this).classed("active", false);
}
