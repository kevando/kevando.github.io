var urls = {
  map: "us-geo.json",
  // airports: "airports.csv",
  // flights: "flights.csv",
  // friendships: "friendships.csv",
  unitedStates: "united-states.tsv"
};

var path = d3.geoPath();

var svg = d3.select("#mainsvg");

var width = parseInt(svg.attr("width"));
var height = parseInt(svg.attr("height"));
var hypotenuse = Math.sqrt(width * width + height * height);

// must be hard-coded to match our topojson projection
// source: https://github.com/topojson/us-atlas
var projection = d3
  .geoAlbers()
  .scale(1280)
  .translate([480, 300]);

var scales = {
  // used to scale airport bubbles
  airports: d3.scaleSqrt().range([4, 18]),
  states: d3.scaleSqrt().range([4, 18]),

  // used to scale number of segments per line
  segments: d3
    .scaleLinear()
    .domain([0, hypotenuse])
    .range([1, 10])
};

// have these already created for easier drawing
var g = {
  basemap: svg.select("g#basemap")
  // airports: svg.select("g#flights"),
};

console.assert(g.basemap.size() === 1);
// console.assert(g.flights.size() === 1);

var tooltip = d3.select("text#tooltip");
console.assert(tooltip.size() === 1);

// load the airport and flight data together
let promises = [d3.json(urls.map), d3.tsv(urls.unitedStates, typeUnitedStates)];

Promise.all(promises).then(processData);

// process airport and flight data
function processData(values) {
  console.assert(values.length === 2);

  let map = values[0];
  let unitedStates = values[1];
  // let flights = values[1];

  console.log("unitedStates: " + unitedStates.length);
  // console.log(" flights: " + flights.length);

  // convert airports array (pre filter) into map for fast lookup
  let iata = new Map(unitedStates.map(node => [node.iata, node]));

  // done filtering airports can draw
  drawMap(map, unitedStates);
  // drawAirports(airports);
  // drawPolygons(airports);

  // reset map to only include airports post-filter
  iata = new Map(unitedStates.map(node => [node.iata, node]));

  // filter out flights that are not between airports we have leftover
  // old = flights.length;
  // flights = flights.filter(
  //   link => iata.has(link.source.iata) && iata.has(link.target.iata)
  // );
  // console.log(" removed: " + (old - flights.length) + " flights");

  // done filtering flights can draw
  // drawFlights(airports, flights);

  console.log({ unitedStates: unitedStates });
  // console.log({ flights: flights });
}

// draws the underlying map
function drawMap(map, unitedStates) {
  // console.log(unitedStates);

  var topoFeatureData = topojson.feature(map, map.objects.states).features;

  topoFeatureData.forEach(function(geoState) {
    var stateData = unitedStates.find(function(us_state) {
      return parseInt(geoState.id) === us_state.id;
    });

    if (stateData) {
      geoState.key = stateData.id;
      geoState.properties = stateData;
    }
  });
  console.log("topoFeatureData", topoFeatureData);

  g.basemap
    .attr("class", "states")
    .selectAll("path")
    .data(topoFeatureData)
    .style("fill", function(d) {return 'purple' })
    .enter()
    .append("path")
    .attr("class", function(d) { 
      console.log('d',d)
      return d.properties.color
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

  console.log(d);

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
