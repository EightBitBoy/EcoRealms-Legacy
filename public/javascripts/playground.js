console.log("Hello from playground.js!")

var WIDTH = 600
var HEIGHT = 450

var VIEWPORT = document.getElementById("viewport");

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, WIDTH / HEIGHT, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer({canvas: VIEWPORT});
renderer.setSize( WIDTH, HEIGHT );
//document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function render() {
	requestAnimationFrame( render );
	renderer.render( scene, camera );
}
render();
