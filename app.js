//will have to use rest to talk to the database

//server needs CORS otherwise requests will be denied
function DatabasePush(){

}


//For Building Museums
function BuildMode(){
    var hololens = new HoloBuild.HoloCamera();
    var holoscene = new HoloBuild.HoloSpace();
    var holorender = new HoloBuild.HoloRenderer();
    var geometry = new HoloBuild.HoloSphereGeometry(0.1, 20, 20);
    var material = new HoloBuild.HoloMeshBasicMaterial();
    var earthHologram = new HoloBuild.HoloMesh( geometry, material, true);
    earthHologram.setImage("earth.png");
    holoscene.add(earthHologram);
    earthHologram.onTap = function(){
        earthHologram.showAdjust();
    }
}


function PresentMode(){

}


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//               Main Execution Area
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


BuildMode();
