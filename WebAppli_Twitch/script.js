const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

var raycaster, mouse = { x : 0, y : 0 };

/*var geometry_01 = new THREE.BoxGeometry( 50, 50, 50)
var material = new THREE.MeshStandardMaterial( { color: 0xff0051 })
var cube_01 = new THREE.Mesh ( geometry_01, material )
scene.add( cube_01 )
cube_01.position.x = 20;
cube_01.position.y = 0;
cube_01.position.z = -50;*/

var font_01 = new THREE.FontLoader();
font_01.load("https://github.com/chalupagrande/threejs-text-example/blob/f07f25c31f074f0fdbb71d83124bab1b74930280/mk3_regular.js", function (res){
    font = res;

    text_01 = new THREE.TextGeometry( "text",  {
        font: font,
        size: size,
        height: height,
    });

    scene.add(text_01);
});


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

init();

function init () {
    raycaster = new THREE.Raycaster();
}

function animate() {
    requestAnimationFrame( animate )

    /*cube_01.rotation.x += 0.001;
    cube_01.rotation.y += 0.001;*/

    spheres.forEach((sphere, ndx) => {
        sphere.position.x += 0.1 * ndx;
    });

    renderer.render( scene, camera )
}
animate()

document.addEventListener( 'mousedown', onDocumentMouseDown, false );

function onDocumentMouseDown( event ) {

    event.preventDefault();

     //1. sets the mouse position with a coordinate system where the center
    //   of the screen is the origin
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    //2. set the picking ray from the camera position and mouse coordinates
    raycaster.setFromCamera( mouse, camera );    

    //3. compute intersections
    var intersects = raycaster.intersectObjects( scene.children );

    for ( var i = 0; i < intersects.length; i++ ) {
        console.log( intersects[ i ] ); 
        /*
            An intersection has the following properties :
                - object : intersected object (THREE.Mesh)
                - distance : distance from camera to intersection (number)
                - face : intersected face (THREE.Face3)
                - faceIndex : intersected face index (number)
                - point : intersection point (THREE.Vector3)
                - uv : intersection point in the object's UV coordinates (THREE.Vector2)
        */
    }
}