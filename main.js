//Setup
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { ThreeMFLoader } from 'three/examples/jsm/Addons.js';

const renderer = new THREE.WebGLRenderer();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const controls = new OrbitControls(camera,renderer.domElement);

camera.position.set(0,50,0);
controls.update();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Orbits
const mercuryOrbit = new THREE.Group();
const venusOrbit = new THREE.Group();
const earthOrbit = new THREE.Group();
const marsOrbit = new THREE.Group();
const jupiterOrbit = new THREE.Group();
const saturnOrbit = new THREE.Group();
const uranusOrbit = new THREE.Group();
const neptuneOrbit = new THREE.Group();
const plutoOrbit = new THREE.Group();

const orbitsAll = new THREE.Group();
orbitsAll.add(mercuryOrbit, marsOrbit, venusOrbit, earthOrbit, jupiterOrbit, saturnOrbit,neptuneOrbit,uranusOrbit,plutoOrbit);

const ambienceIntensity = 1;
const spaceAmbience = new THREE.AmbientLight(0x404040, ambienceIntensity);

const isEnd = false;

const sphere = new THREE.SphereGeometry(1,32,32);
const dodecahedron = new THREE.DodecahedronGeometry(1.1,1);
const ring = new THREE.RingGeometry( 1.4, 3, 10 );

//Sun
const sunScale = 20;

const sunLightIntensity = 150 * sunScale;
const sunLightColor = 0xFFFFFF;

const sunGroup = new THREE.Group();
const sunMaterial = new THREE.MeshToonMaterial({color: 0xFFFF00});
const insideSun = new THREE.Mesh(sphere,sunMaterial);

insideSun.scale.set(sunScale,sunScale,sunScale);

const outSunMaterial = new THREE.MeshBasicMaterial({color: 0xFFA500,transparent: true, opacity: 0.5, });
const outSun = new THREE.Mesh(dodecahedron,outSunMaterial);

outSun.scale.set(sunScale,sunScale,sunScale);

const sunLight = new THREE.PointLight(sunLightColor,sunLightIntensity);
sunLight.position.set(0,0,0);

sunGroup.add(insideSun, sunLight, outSun);

// Mercury
const mercuryMaterial = new THREE.MeshStandardMaterial({color: 0xa6a6a6});
const mercury = new THREE.Mesh(sphere, mercuryMaterial);
mercury.scale.set(0.2, 0.2, 0.2);
mercuryOrbit.add(mercury);
mercury.position.x = 3 + sunScale;
scene.add(mercuryOrbit);

// Venus
const venusMaterial = new THREE.MeshStandardMaterial({color: 0xd28b2d});
const venus = new THREE.Mesh(sphere, venusMaterial);
venus.scale.set(0.5, 0.5, 0.5);
venusOrbit.add(venus);
venus.position.x = 4.5 + sunScale;
scene.add(venusOrbit);

// Earth
const earthMaterial = new THREE.MeshStandardMaterial({color: 0x3a7bbd});
const earth = new THREE.Mesh(sphere, earthMaterial);
earth.scale.set(0.6, 0.6, 0.6);
earthOrbit.add(earth);
earth.position.x = 6 + sunScale;
scene.add(earthOrbit);

// Mars
const marsMaterial = new THREE.MeshStandardMaterial({color: 0xd85f3d});
const mars = new THREE.Mesh(sphere, marsMaterial);
mars.scale.set(0.5, 0.5, 0.5);
marsOrbit.add(mars);
mars.position.x = 8 + sunScale;
scene.add(marsOrbit);

// Jupiter
const jupiterMaterial = new THREE.MeshStandardMaterial({color: 0xd19d66});
const jupiter = new THREE.Mesh(sphere, jupiterMaterial);
jupiter.scale.set(1.4, 1.4, 1.4);
jupiterOrbit.add(jupiter);
jupiter.position.x = 12 + sunScale;
scene.add(jupiterOrbit);

// Saturn
const saturnMaterial = new THREE.MeshStandardMaterial({color: 0xd1b49f});
const saturn = new THREE.Mesh(sphere, saturnMaterial);
saturn.scale.set(1.2, 1.2, 1.2);
const saturnRingMaterial = new THREE.MeshToonMaterial({color: 0xc9b065, side: THREE.DoubleSide });
const saturnRing = new THREE.Mesh( ring, saturnRingMaterial );
saturnRing.add(saturn);
saturnOrbit.add(saturn);
saturn.position.x = 16 + sunScale;
scene.add(saturnOrbit);

// Uranus
const uranusMaterial = new THREE.MeshStandardMaterial({color: 0x7ec8c1});
const uranus = new THREE.Mesh(sphere, uranusMaterial);
uranus.scale.set(1.0, 1.0, 1.0);
uranusOrbit.add(uranus);
uranus.position.x = 20 + sunScale;
scene.add(uranusOrbit);

// Neptune
const neptuneMaterial = new THREE.MeshStandardMaterial({color: 0x4b7e97});
const neptune = new THREE.Mesh(sphere, neptuneMaterial);
neptune.scale.set(1.0, 1.0, 1.0);
neptuneOrbit.add(neptune);
neptune.position.x = 24 + sunScale;
scene.add(neptuneOrbit);

// Pluto (Dwarf planet)
const plutoMaterial = new THREE.MeshStandardMaterial({color: 0xa5a5a5});
const pluto = new THREE.Mesh(sphere, plutoMaterial);
pluto.scale.set(0.3, 0.3, 0.3);
plutoOrbit.add(pluto);
pluto.position.x = 30 + sunScale;
scene.add(plutoOrbit);

//Randomizing the orbits
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

mercuryOrbit.rotateZ(getRandomInt(20));
mercuryOrbit.rotateY(getRandomInt(20));

venusOrbit.rotateZ(getRandomInt(20));
venusOrbit.rotateY(getRandomInt(20));

earthOrbit.rotateZ(getRandomInt(20));
earthOrbit.rotateY(getRandomInt(20));

marsOrbit.rotateZ(getRandomInt(20));
marsOrbit.rotateY(getRandomInt(20));

jupiterOrbit.rotateZ(getRandomInt(20));
jupiterOrbit.rotateY(getRandomInt(20));

saturnOrbit.rotateY(getRandomInt(20));
saturnOrbit.rotateZ(getRandomInt(20));

uranusOrbit.rotateY(getRandomInt(20));
uranusOrbit.rotateZ(getRandomInt(20));

neptuneOrbit.rotateZ(getRandomInt(20));
neptuneOrbit.rotateY(getRandomInt(20));

plutoOrbit.rotateY(getRandomInt(20));
plutoOrbit.rotateZ(getRandomInt(20));

//End of times
//Sun Implosion
function SunImplosion(){
    const sunImploded = false;

    const implodedSunScale = sunScale * 0.01; // Target scale (imploded)
    const duration = 2000;
    const startTime = performance.now(); // Start time
    const initialScale = sunGroup.scale.x; // Assuming the sun is uniformly scaled

    const initialLightIntensity = sunLight.intensity;
    const implodedSunLight = initialLightIntensity * 10;

    const initialR = sunMaterial.color.r;
    const initialG = sunMaterial.color.g;
    const initialB = sunMaterial.color.b;

    const implodedSun = new THREE.MeshStandardMaterial({color: 0x48CAE4});
    const implodedR = implodedSun.color.r;
    const implodedG = implodedSun.color.g;
    const implodedB = implodedSun.color.b; 
    
    function animateScale() {
        const elapsed = (performance.now() - startTime);
        const progress = Math.min(elapsed / duration, 1); // Progress from 0 to 1
        const currentScale = THREE.MathUtils.lerp(initialScale, implodedSunScale, progress);
        const currentLightIntensity = THREE.MathUtils.lerp(initialLightIntensity, implodedSunLight, progress);

        sunMaterial.color.r = THREE.MathUtils.lerp(initialR,implodedR,progress);
        sunMaterial.color.g = THREE.MathUtils.lerp(initialG,implodedG,progress);
        sunMaterial.color.b = THREE.MathUtils.lerp(initialB,implodedB,progress);

        outSun.material.color.r = THREE.MathUtils.lerp(initialR,implodedR,progress);
        outSun.material.color.g = THREE.MathUtils.lerp(initialG,implodedG,progress);
        outSun.material.color.b = THREE.MathUtils.lerp(initialB,implodedB,progress);
        
        sunLight.intensity = currentLightIntensity;
        sunGroup.scale.set(currentScale, currentScale, currentScale); // Update scale

        if (progress < 1) {
            requestAnimationFrame(animateScale); // Continue animation
        }
        else{
            SunExplosion();
        }
    }
    requestAnimationFrame(animateScale);
}

//Sun Explosion
function SunExplosion(){
    const explodedSunScale = sunScale * 0.15;
    const duration = 4000;
    const startTime = performance.now(); // Start time
    const initialScale = sunGroup.scale.x;

    const initialR = sunMaterial.color.r;
    const initialG = sunMaterial.color.g;
    const initialB = sunMaterial.color.b;

    const implodedSun = new THREE.MeshStandardMaterial({color: 0xFF0000});
    const implodedR = implodedSun.color.r;
    const implodedG = implodedSun.color.g;
    const implodedB = implodedSun.color.b;

    
    function animateScale() {
        const elapsed = (performance.now() - startTime);
        const progress = Math.min(elapsed / duration, 1); // Progress from 0 to 1
        const currentScale = THREE.MathUtils.lerp(initialScale, explodedSunScale, progress);

        sunMaterial.color.r = THREE.MathUtils.lerp(initialR,implodedR,progress);
        sunMaterial.color.g = THREE.MathUtils.lerp(initialG,implodedG,progress);
        sunMaterial.color.b = THREE.MathUtils.lerp(initialB,implodedB,progress);

        outSun.material.color.r = THREE.MathUtils.lerp(initialR,implodedR,progress);
        outSun.material.color.g = THREE.MathUtils.lerp(initialG,implodedG,progress);
        outSun.material.color.b = THREE.MathUtils.lerp(initialB,implodedB,progress);

        sunGroup.scale.set(currentScale, currentScale, currentScale); // Update scale

        if (progress < 1) {
            requestAnimationFrame(animateScale); // Continue animation
        }
        else{
            isEnd = true;
        }
    }
    requestAnimationFrame(animateScale);
}

//Animations
function animate(){
    requestAnimationFrame(animate);
    controls.update();

    //Sun Animation
    outSun.rotateZ(0.008);
    insideSun.rotateZ(0.003);

    //Planets Animation
    mercuryOrbit.rotateY(0.01);
    venusOrbit.rotateZ(0.008);
    earthOrbit.rotateY(0.006);
    marsOrbit.rotateZ(0.004);
    jupiterOrbit.rotateY(0.003);
    saturnOrbit.rotateZ(0.002);
    uranusOrbit.rotateY(0.001);
    neptuneOrbit.rotateZ(0.0008);
    plutoOrbit.rotateY(0.0005); // >w<

    renderer.render(scene,camera);
}

//Scene
scene.add(sunGroup);
scene.add(spaceAmbience);
//Rendering
animate();

//Controls
window.addEventListener("keydown", (event) => {
    if (event.key === "i") {
      SunImplosion(); // Press 'i' to trigger sun implosion
    }
  });

mixer.addEventListener( 'finished', ( event ) => {

	console.log( 'Finished animation action: ', event.action );

	// now remove the respective 3D object from scene
    scene.remove(mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto);

} );