var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.CubeGeometry( 5, 5, 5 );
var material = new THREE.MeshLambertMaterial( { color: 0x9A606 } );
var mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

// Creates yellow light source
// add to scene
var light = new THREE.PointLight( 0xFFAAAA );
light.position.set( 20, 10, 20 );
scene.add( light );

camera.position.set( 20, 10, 20);

var render = function () {
	requestAnimationFrame( render );

	mesh.rotation.x += 0.0008;
	mesh.rotation.y += 0.004;

	renderer.render(scene, camera);
};

render();