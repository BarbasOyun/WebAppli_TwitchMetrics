const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

var geometry_01 = new THREE.BoxGeometry( 50, 50, 50)
var material = new THREE.MeshStandardMaterial( { color: 0xff0051 })
var cube_01 = new THREE.Mesh ( geometry_01, material )
scene.add( cube_01 )
cube_01.position.x = 20;
cube_01.position.y = 0;
cube_01.position.z = -50;

const spheres = [CreateSphere(3, 0xffff00, -5), CreateSphere(1, 0xffff00, 0), CreateSphere(2, 0xffff00, 5)];
spheres.forEach((sphere, ndx) => {
    scene.add( sphere );
});


camera.position.z = 5

var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.5)
scene.add( ambientLight )

var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );

renderer.render( scene, camera )

function CreateSphere(radius, color, x)
{
    var geometrySphere_01 = new THREE.SphereGeometry( radius, 32, 32 );
    var materialSphere = new THREE.MeshStandardMaterial( {color} );
    var sphere_01 = new THREE.Mesh( geometrySphere_01, materialSphere );
    sphere_01.position.x = x;
    sphere_01.position.z = -5;
    return sphere_01;
}

function animate() {
    requestAnimationFrame( animate )

    cube_01.rotation.x += 0.001;
    cube_01.rotation.y += 0.001;

    spheres.forEach((sphere, ndx) => {
        sphere.position.x += 0.1 * ndx;
    });

    renderer.render( scene, camera )
}
animate()