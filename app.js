//will have to use rest to talk to the database

//server needs CORS otherwise requests will be denied
function DatabasePush(){

}

// Global variables... kinda messy but it'll do for now
var hololens = new HoloBuild.HoloCamera();
var holoscene = new HoloBuild.HoloSpace();
var holorender = new HoloBuild.HoloRenderer();
var geometry = new HoloBuild.HoloSphereGeometry(0.1, 20, 20);
var material = new HoloBuild.HoloMeshBasicMaterial();
var earthHologram = new HoloBuild.HoloMesh( geometry, material, true);

//For Building Museums
function BuildMode(){
    
    earthHologram.setImage("earth.png");
    holoscene.add(earthHologram);
    earthHologram.position.set(0.0, 0, 0.1 );
    
    // create artifact
    

    earthHologram.onTap = function(){//will have to use rest to talk to the database

//server needs CORS otherwise requests will be denied
function DatabasePush(){

}

// Global variables... kinda messy but it'll do for now
var hololens = new HoloBuild.HoloCamera();
var holoscene = new HoloBuild.HoloSpace();
var holorender = new HoloBuild.HoloRenderer();
var geometry = new HoloBuild.HoloSphereGeometry(0.1, 20, 20);
var material = new HoloBuild.HoloMeshBasicMaterial();
var earthHologram = new HoloBuild.HoloMesh( geometry, material, true);

//For Building Museums
function BuildMode(){
    
    earthHologram.setImage("earth.png");
    holoscene.add(earthHologram);
    earthHologram.position.set(0.0, 0, 0.1 );
    
    // create artifact
    

    earthHologram.onTap = function(){
        earthHologram.showAdjust();
    }

    // Render initial holograms
        holorender.render(holoscene, hololens);
    
}


// Animation loop 
function renderloop(){
    window.requestAnimationFrame(renderloop);
    earthHologram.rotation.x += 0.01;
    earthHologram.rotation.y += 0.01;
    holorender.render(holoscene, hololens);
    
    
}


function PresentMode(){

}


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//               Main Execution Area
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


BuildMode();
renderloop();
        earthHologram.showAdjust();
    }

    // Render initial holograms
        holorender.render(holoscene, hololens);
    
}


// Animation loop 
function renderloop(){
    window.requestAnimationFrame(renderloop);
    earthHologram.rotation.x += 0.01;
    earthHologram.rotation.y += 0.01;
    holorender.render(holoscene, hololens);
    
    
}


function PresentMode(){

}


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//               Main Execution Area
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


BuildMode();
renderloop();
