console.log("Hello from playground.js!")

var WIDTH = 600
var HEIGHT = 450

var VIEWPORT = document.getElementById("viewport");

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
camera.position.z = 5;

var renderer = new THREE.WebGLRenderer({canvas: VIEWPORT, antialias: false});
renderer.setSize(WIDTH, HEIGHT);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshLambertMaterial({color: 0x0099e6});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

var light = new THREE.PointLight(0xffffff);
light.position.set(-50,100,100);
scene.add(light);

var lineMaterial = new THREE.LineBasicMaterial({color: 0xffff00, linewidth: 10});
var lineGeometry = new THREE.Geometry();
lineGeometry.vertices.push(new THREE.Vector3(-2, 0, 0));
lineGeometry.vertices.push(new THREE.Vector3(0, 0, 0));
lineGeometry.vertices.push(new THREE.Vector3(2, 0, 0));
var line = new THREE.Line(lineGeometry, lineMaterial);
scene.add(line)

/*
var grid = new EBB.Grid();
grid.addLine(-2, 1, 2, 1);
grid.addToScene(scene);
*/

/*
voronoi test stuff
*/






function render() {
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	requestAnimationFrame(render);
	renderer.render(scene,camera);
}

render();
