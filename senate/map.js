var svg = d3.select("#mainsvg"),
  width = +svg.attr("width"),
  height = +svg.attr("height");

var path = d3.geoPath();

var promises = [
  d3.json("us-10m.v1.json")
  //   d3.tsv("unemployment.tsv", function(d) { unemployment.set(d.id, +d.rate); })
];

Promise.all(promises).then(ready);

function ready([us]) {
  svg
    .append("g")
    .attr("class", "states")
    .selectAll("path")
    .data(topojson.feature(us, us.objects.states).features)
    .enter()
    .append("path")
    .attr("d", path);

  svg
    .append("path")
    .attr("class", "state-borders")
    .attr(
      "d",
      path(
        topojson.mesh(us, us.objects.states, function(a, b) {
          return a !== b;
        })
      )
    );
}
