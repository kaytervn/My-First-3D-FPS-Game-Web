import * as THREE from "three";

export class Bullet extends THREE.Mesh {
  constructor() {
    super(
      new THREE.SphereGeometry(0.05, 8, 8),
      new THREE.MeshBasicMaterial({ color: "#FFE15D" })
    );
    this.velocity = new THREE.Vector3();
  }

  update() {
    this.position.add(this.velocity);
  }
}
