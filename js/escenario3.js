const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xEF15DB, 0.1 , 9)
var loader = new THREE.TextureLoader();
loader.load(
    'img/retro1.jpeg',function(texture){
        scene.background = texture;
    }
);

//camaras

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometrìas

const geometry = new THREE.CylinderGeometry( 1, 1, 3, 200 );
const material = new THREE.MeshBasicMaterial( {color: 0x155BEF,wireframe:true} );
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

camera.position.z = 5;

//animaciòn

function animate() {
	requestAnimationFrame( animate );
    cylinder.rotation.x += 0.01;
    cylinder.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();