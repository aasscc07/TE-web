
let scene = new THREE.Scene();
scene.background = new THREE.Color('skyblue');
let camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000 );
camera.position.set(0, 0, 5);


import { GLTFLoader } from "GLTFLoader";

let loader = new GLTFLoader();

loader.load("img/test.glb", function (gltf) {
  scene.add(gltf.scene)
});