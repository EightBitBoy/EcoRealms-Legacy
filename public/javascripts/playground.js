console.log("Hello from playground.js!")

var WIDTH = 600
var HEIGHT = 450

var VIEWPORT = document.getElementById("viewport");

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
camera.position.z = 5;

var renderer = new THREE.WebGLRenderer({canvas: VIEWPORT});
renderer.setSize(WIDTH, HEIGHT);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshLambertMaterial({color: 0x0099e6});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

var light = new THREE.PointLight(0xffffff);
light.position.set(-50,100,100);
scene.add(light);

function render() {
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	requestAnimationFrame(render);
	renderer.render(scene,camera);
}

render();
