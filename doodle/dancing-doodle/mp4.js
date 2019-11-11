var lastUpdate;
var container;
var camera, scene, renderer;
var uniforms;

function getVideoMesh() {

    // load video
  var video = document.getElementById( 'video' );
  videoTexture = new THREE.VideoTexture( video );
  videoTexture.minFilter = THREE.LinearFilter;
  videoTexture.magFilter = THREE.LinearFilter;
  videoTexture.format = THREE.RGBFormat;

  // shader stuff
  uniforms = {
    time: { type: "f", value: 1.0 },
    texture: { type: "sampler2D", value: videoTexture }
  };
  var material = new THREE.ShaderMaterial( {
    uniforms: uniforms,
    vertexShader: document.getElementById( 'vertexShader' ).textContent,
    fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
    transparent: true
  } );
  lastUpdate = new Date().getTime();

  // put it together for rendering
  var geometry = new THREE.PlaneBufferGeometry( 2, 2 );
  var mesh = new THREE.Mesh( geometry, material );
  mesh.scale.setScalar(0.8);

  log('returning mesh')
  console.log(mesh)
  return mesh;

}

function init(showStats) {
  // stats
  if (showStats) {
    var stats = new Stats();
    stats.domElement.style.zIndex = '200';
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0';
    stats.domElement.style.top = '0';
    document.body.appendChild(stats.domElement);
    requestAnimationFrame(function updateStats(){
      stats.update();
      requestAnimationFrame(updateStats);
    });
  }
  
  // basic setup
  container = document.getElementById( 'container' );
  camera = new THREE.Camera();
  camera.position.z = 1;
  scene = new THREE.Scene();
  
  // Kev
  var mesh = getVideoMesh()
  scene.add( mesh );


  // Do I need thsi??
  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setPixelRatio( window.devicePixelRatio / parseFloat(document.getElementById('resolution').value) );
  container.appendChild( renderer.domElement );
  
  // event listeners
  document.getElementById('play-button').addEventListener('click', e => { video.play(); });
  document.getElementById('stop-button').addEventListener('click', e => { video.pause(); });
  onWindowResize();
  window.addEventListener( 'resize', onWindowResize, false);
  document.getElementById('resolution').addEventListener('change', onResolutionChange, false);
}

// events
function onWindowResize(evt) {
  renderer.setSize( window.innerHeight, window.innerHeight );
}
function onResolutionChange(evt) {
  var newResolutionScale = parseFloat(evt.target.value);
  renderer.setPixelRatio( window.devicePixelRatio / newResolutionScale );
}
function animate() {
  var currentTime = new Date().getTime()
  var timeSinceLastUpdate = currentTime - lastUpdate;
  lastUpdate = currentTime;
  
  requestAnimationFrame( animate );
  render(timeSinceLastUpdate);
}
function render(timeDelta) {
  uniforms.time.value += (timeDelta ? timeDelta / 1000 : 0.05);
  renderer.render( scene, camera );
}

// boot
init(true);
animate();
