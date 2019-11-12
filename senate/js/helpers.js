function typeUnitedStates(unitedState) {
  unitedState.id = parseFloat(unitedState.id);

  unitedState.longitude = parseFloat(unitedState.longitude);
  unitedState.latitude = parseFloat(unitedState.latitude);

  // use projection hard-coded to match topojson data
  let coords = projection([unitedState.longitude, unitedState.latitude]);
  unitedState.x = coords[0];
  unitedState.y = coords[1];

  unitedState.outgoing = 0; // eventually tracks number of outgoing flights
  unitedState.incoming = 0; // eventually tracks number of incoming flights

  unitedState.flights = []; // eventually tracks outgoing flights

  return unitedState;
}


// calculates the distance between two nodes
// sqrt( (x2 - x1)^2 + (y2 - y1)^2 )
function distance(source, target) {
  var dx2 = Math.pow(target.x - source.x, 2);
  var dy2 = Math.pow(target.y - source.y, 2);

  return Math.sqrt(dx2 + dy2);
}