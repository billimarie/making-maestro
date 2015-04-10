// Remember:
// Scenes = cameras, lights (and meshes ???)
// end with Renderer (like After Effects! ^^;)
// re: Renderer = Three.js has fallbacks (pollyfill ???) for older browsers or browers w/o WebGL

// Sets new Scene, new Camera, and Camera position
var scene = new THREE.Scene();									// sets the Scene
var camera = new THREE.PerspectiveCamera(							// sets the Camera (type: Perspective); lists parameters
	75,											// "Field of View" (overall width ???)
	window.innerWidth/window.innerHeight,							// "Aspect Ratio" (like film: width divided by height)
	1,											// "Near", "Far"
	1000											//   - any objects further than "Far" or closer than "Near" won't be rendered
	);
camera.position.z = 400;									// Coordinates can't be 0,0,0 bc Camera & Cube would be on top / inside each other

// This next part creates the Renderer instance:
// - sets the size (browser window)
//   * for half-resolution (NOT half-size): divide by 2, obvs: ( window.innerWidth/2, window.innerHeight/2)
// - adds the Renderer element (<canvas>) to HTML doc

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Creates a cube that is 200 units wide x tall x deep
// adds the material (think Maya 3D)
// adds the mesh to the scene

var geometry = new THREE.BoxGeometry( 200, 200, 200 );						// BoxGeometry: an Object containing all points (vertices) & fill (faces) of the cube
var material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );		// Three.js comes with several materials (like Maya! again). color = hex
var cube = new THREE.Mesh( geometry, material );						// Mesh: an Object that takes a geometry then applies material to it
scene.add( cube );										// add Scene

// This is a Render Loop. A Render loop causes the renderer to draw the scene 60fps 
// function render() {
//	requestAnimationFrame( render );
//	renderer.render( scene, camera );
// }
// render();

var render = function () {
	requestAnimationFrame( render );

	cube.rotation.x += 0.005;								// Rotation is by adjustable fps
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);								// Renders Scene! ^_^
};

render();
