const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

var geometry = new THREE.BoxGeometry( 1, 1, 1)
var material = new THREE.MeshStandardMaterial( { color: 0xff0051 })
var cube = new THREE.Mesh ( geometry, material )
scene.add( cube )

var geometry_01 = new THREE.BoxGeometry( 50, 50, 50)
var cube_01 = new THREE.Mesh ( geometry_01, material )
scene.add( cube_01 )
cube_01.position.x = 20;
cube_01.position.y = 0;
cube_01.position.z = -50;

camera.position.z = 5

var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.5)
scene.add( ambientLight )

var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );

renderer.render( scene, camera )

function animate() {
    requestAnimationFrame( animate )
    cube.rotation.x += 0.04;
    cube.rotation.y += 0.04;

    cube_01.rotation.x += 0.001;
    cube_01.rotation.y += 0.001;

    renderer.render( scene, camera )
}
animate()