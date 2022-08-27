const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xF6F6F6, 0.1 , 9)
scene.background = new THREE.Color(0x635F5E);

//camaras

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometrìas

const geometry = new THREE.ConeGeometry( 1, 5,20 );
const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const cone = new THREE.Mesh( geometry, material );
scene.add( cone );

camera.position.z = 5;

//animaciòn

function animate() {
	requestAnimationFrame( animate );
    cone.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();