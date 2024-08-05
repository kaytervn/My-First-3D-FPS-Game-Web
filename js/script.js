import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Box } from "./Box.js";
import { Gun } from "./Gun.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true,
});
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);

const gun = new Gun({
  position: {
    x: 0,
    y: 0,
    z: 0,
  },
  color: "#138D75",
});
camera.add(gun);
scene.add(camera);

const ground = new Box({
  width: 50,
  height: 0.5,
  depth: 50,
  color: "#212121",
  position: {
    x: 0,
    y: -2,
    z: 0,
  },
});
ground.receiveShadow = true;
scene.add(ground);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.y = 3;
light.position.z = 1;
light.castShadow = true;
scene.add(light);
scene.add(new THREE.AmbientLight(0xffffff, 0.5));

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
