if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var STATS_ENABLED = false;

var CARS = {

				"veyron": 	{

					name:	"Bugatti Veyron",
					url: 	"obj/veyron/VeyronNoUv_bin.js",
					author: '<a href="http://artist-3d.com/free_3d_models/dnm/model_disp.php?uid=1129" target="_blank">Troyano</a>',
				},

				"gallardo": {

					name: 	"Lamborghini Gallardo",
					url:	"obj/gallardo/GallardoNoUv_bin.js",
					author: '<a href="http://artist-3d.com/free_3d_models/dnm/model_disp.php?uid=1711" target="_blank">machman_3d</a>',
				},

				"f50": {

					name: 	"Ferrari F50",
					url:	"obj/f50/F50NoUv_bin.js",
					author: '<a href="http://artist-3d.com/free_3d_models/dnm/model_disp.php?uid=1687" target="_blank">daniel sathya</a>',
				},

				"camaro": {

					name: 	"Chevrolet Camaro",
					url:	"obj/camaro/CamaroNoUv_bin.js",
					author: '<a href="http://www.turbosquid.com/3d-models/blender-camaro/411348" target="_blank">dskfnwn</a>',
				}

			};

var container, stats;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth/window.innerHeight,
	1,
	1000
	);
camera.position.z = 400;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 200, 200, 200 );
var material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

var render = function () {
	requestAnimationFrame( render );

	cube.rotation.x += 0.005;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);
};

render();
