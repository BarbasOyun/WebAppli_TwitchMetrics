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

/*var font_01 = new THREE.FontLoader();
font_01.load('mk3_regular', function (res){
    font = res;

    text_01 = new THREE.TextGeometry( "text",  {
        font: font,
        size: size,
        height: height,
    });

    text_01.position.z = -5;
    scene.add(text_01);
});*/


camera.position.z = 5


var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.5)
scene.add( ambientLight )

var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );


const spheres = [CreateSphere(3, 0xffff00, -5), CreateSphere(1, 0xffff00, 0), CreateSphere(2, 0xffff00, 5)];
spheres.forEach((sphere, ndx) => {
    scene.add( sphere );
});

const tempV = new THREE.Vector3();

var text2 = document.createElement('div');
text2.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
text2.style.width = 100;
text2.style.height = 100;
text2.style.backgroundColor = "blue";
text2.innerHTML = "hi there!";
//var posOnScreen = toScreenXY3(spheres[0].position);
//var posOnScreen = toXYCoords(spheres[0].position);

/*if (Math.sign(posOnScreen.x) == -1)
{
    posOnScreen.x = posOnScreen.x / (-5500 * 2) * 100;
}else{
    posOnScreen.x = (1 - (posOnScreen.x / (5500 * 2))) * 100;
}

if (Math.sign(posOnScreen.y) == -1)
{
    posOnScreen.y = posOnScreen.y / (-350 * 2) * 100;
}else{
    posOnScreen.y = (1 - (posOnScreen.y / (350 * 2))) * 100;
}

console.log("XposOnScreen : " + posOnScreen.x);
console.log("YposOnScreen : " + posOnScreen.y);
//-2000 = 0 2000 = 100
text2.style.top = posOnScreen.y + 'px';
text2.style.left = posOnScreen.x + 'px';*/

// get the position of the center of the cube
spheres[0].updateMatrixWorld(true, false);
spheres[0].getWorldPosition(tempV);

// get the normalized screen coordinate of that position
// x and y will be in the -1 to +1 range with x = -1 being
// on the left and y = -1 being on the bottom
tempV.project(camera);

// convert the normalized position to CSS coordinates
const x = (tempV.x *  .5 + .5) * window.innerWidth;
const y = (tempV.y * -.5 + .5) * window.innerHeight;

// move the elem to that position
text2.style.transform = `translate(-50%, -50%) translate(${x}px,${y}px)`;

document.body.appendChild(text2);

renderer.render( scene, camera )

init();

animate()

document.addEventListener( 'mousedown', onDocumentMouseDown, false );

function CreateSphere(radius, color, x)
{
    var geometrySphere_01 = new THREE.SphereGeometry( radius, 32, 32 );
    var materialSphere = new THREE.MeshStandardMaterial( {color} );
    var sphere_01 = new THREE.Mesh( geometrySphere_01, materialSphere );
    sphere_01.position.x = x;
    sphere_01.position.z = -5;
    return sphere_01;
}

function init () {
    raycaster = new THREE.Raycaster();
}

function animate() {
    requestAnimationFrame( animate )

    spheres.forEach((sphere, ndx) => {
        //sphere.position.x += 0.1 * ndx;
    });

    renderer.render( scene, camera )
}

function onDocumentMouseDown( event ) {

    event.preventDefault();

    spheres[0].position.x -= 0.2;
    var posOnScreen2 = toScreenXY3(spheres[0].position);
    console.log("XposOnScreen : " + event.clientX);

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

function toXYCoords (pos) {
    //var vector = projector.projectVector(pos.clone(), camera);
    var vector = pos.clone();
    vector.project;

    console.log("XposOnScreen : " + vector.x);
    console.log("YposOnScreen : " + vector.y);

    vector.x = (vector.x + 1)/2 * window.innerWidth;
    vector.y = -(vector.y - 1)/2 * window.innerHeight;
    return vector;
}

function toScreenXY3(obj){

    var vector = obj.clone();
    var windowWidth = window.innerWidth;
    var minWidth = 1280;
  
    if(windowWidth < minWidth) {
      windowWidth = minWidth;
    }
  
    var widthHalf = (windowWidth/2);
    var heightHalf = (window.innerHeight/2);
  
    vector.project;
    //vector.project(camera);
  
    vector.x = ( vector.x * widthHalf ) + widthHalf;
    vector.y = - ( vector.y * heightHalf ) + heightHalf;
    vector.z = 0;
  
    return vector;
  };