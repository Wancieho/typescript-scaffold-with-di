import { inject, injectable } from 'inversify';

import { Color3, DirectionalLight, Mesh, ShadowGenerator, StandardMaterial, Vector3 } from 'babylonjs';
import Scene from '../_core/scene/scene';
import CameraMan from '../camera-man/camera-man';
import Logo from '../logo/logo';

@injectable()
export default class Creator {

  private cameraMan: CameraMan;
  private scene: Scene;

  constructor(
    @inject(CameraMan) cameraMan: CameraMan,
    @inject(Scene) scene: Scene,
    @inject(Logo) logo: Logo,
  ) {
    this.cameraMan = cameraMan;
    this.scene = scene;
  }

  public generate(): void {
    this.cameraMan.generate();

    const sun = new DirectionalLight(
      'sun',
      new Vector3(-1, -2, -1),
      this.scene.instance,
    );
    sun.position = new Vector3(20, 40, 20);
    sun.intensity = 0.8;
    const sunMesh = Mesh.CreateSphere('mesh', 4, 20, this.scene.instance);
    sunMesh.position = new Vector3(
      sun.position.x,
      sun.position.y,
      sun.position.z
    );
    const sunMaterial: any = new StandardMaterial('material', this.scene.instance);
    sunMaterial.emissiveColor = new Color3(1, 1, 0);
    sunMesh.material = sunMaterial;
  }

}
