console.log("Hello from playground.js!")

var WIDTH = 600
var HEIGHT = 450

var VIEWPORT = document.getElementById("viewport");

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
camera.position.z = 20;

var renderer = new THREE.WebGLRenderer({canvas: VIEWPORT, antialias: false});
renderer.setSize(WIDTH, HEIGHT);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshLambertMaterial({color: 0x0099e6});
var cube = new THREE.Mesh(geometry, material);
//scene.add(cube);

var light = new THREE.PointLight(0xffffff);
light.position.set(-50,100,100);
scene.add(light);

var lineMaterial = new THREE.LineBasicMaterial({color: 0xffff00, linewidth: 10});
var lineGeometry = new THREE.Geometry();
lineGeometry.vertices.push(new THREE.Vector3(-2, 0, 0));
lineGeometry.vertices.push(new THREE.Vector3(0, 0.2, 0));
lineGeometry.vertices.push(new THREE.Vector3(2, 0, 0));
var line = new THREE.Line(lineGeometry, lineMaterial);
//scene.add(line)

/*
var grid = new EBB.Grid();
grid.addLine(-2, 1, 2, 1);
grid.addToScene(scene);
*/


/*
voronoi test stuff
*/

var voro = d3.voronoi()
	.x(function(d) { return d.x; })
	.y(function(d) { return d.y; })
	.extent([[-3, -3], [3, 3]]);

var data = [
	{x: 0.7, y: 1.3},
	{x: -2, y: -2},
	{x: -2, y: 2},
	{x: 2, y: 2},
	{x: 2, y: -2}
];

data.forEach(function(point){
	var pointMaterial = new THREE.PointsMaterial({color: 0xff00ff, size: 0.5});
	var pointGeometry = new THREE.Geometry();
	pointGeometry.vertices.push(new THREE.Vector3(point.x, point.y, 0));
	scene.add(new THREE.Points(pointGeometry, pointMaterial));
});

// stuff does not work for triangles???
var polygons = voro.polygons(data);

polygons.forEach(function(polygon){
	var voroLineMaterial = new THREE.LineBasicMaterial({color: 0xff0000, linewidth: 3});
	var voroLineGeometry;
	var voroLine;

	console.log(polygon)

	polygon.forEach(function(point){
		var pointMaterial = new THREE.PointsMaterial({color: 0xffff00, size: 0.5});
		var pointGeometry = new THREE.Geometry();
		pointGeometry.vertices.push(new THREE.Vector3(point[0], point[1], 0));
		scene.add(new THREE.Points(pointGeometry, pointMaterial));
	});

	for(var i = 0; i < polygon.length - 1; i++){
		voroLineGeometry = new THREE.Geometry();
		voroLineGeometry.vertices.push(new THREE.Vector3(polygon[i][0], polygon[i][1], 0));
		voroLineGeometry.vertices.push(new THREE.Vector3(polygon[i + 1][0], polygon[i + 1][1], 0));
		voroLine = new THREE.Line(voroLineGeometry, voroLineMaterial);
		scene.add(voroLine);
	}

	//draw line from last to first point
	voroLineGeometry = new THREE.Geometry();
	voroLineGeometry.vertices.push(new THREE.Vector3(polygon[polygon.length -1][0], polygon[polygon.length - 1][1], 0));
	voroLineGeometry.vertices.push(new THREE.Vector3(polygon[0][0], polygon[0][1], 0));
	voroLine = new THREE.Line(voroLineGeometry, voroLineMaterial);
	scene.add(voroLine);
});

function render() {
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	requestAnimationFrame(render);
	renderer.render(scene,camera);
}

render();
