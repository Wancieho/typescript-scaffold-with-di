import { inject, injectable } from 'inversify';

import { Color3, DirectionalLight, Mesh, ShadowGenerator, StandardMaterial, Vector3, HemisphericLight } from 'babylonjs';
import Scene from '../_core/scene/scene';
import CameraMan from '../camera-man/camera-man';

@injectable()
export default class Creator {

  private cameraMan: CameraMan;
  private scene: Scene;

  constructor(
    @inject(CameraMan) cameraMan: CameraMan,
    @inject(Scene) scene: Scene,
  ) {
    this.cameraMan = cameraMan;
    this.scene = scene;
  }

  public generate(): void {
    this.cameraMan.generate();



    const table: Mesh = Mesh.CreateBox('table', 1, this.scene.instance);
    table.scaling = new Vector3(50.8, 1, 50.8);
    table.position = new Vector3(0, -0.5, 0);
    table.receiveShadows = true;
    const tableMaterial: StandardMaterial = new StandardMaterial('tableMaterial', this.scene.instance);
    tableMaterial.diffuseColor = new Color3(0.1, 0.1, 0.1);
    table.material = tableMaterial;



    const cakes: Array<Mesh> = [];



    const one: Mesh = Mesh.CreateCylinder('one', 10.16, 35.56, 35.56, 48, 1, this.scene.instance);
    one.position = new Vector3(0, 10.16 / 2, 0);
    one.receiveShadows = true;
    const oneMaterial: StandardMaterial = new StandardMaterial('oneMaterial', this.scene.instance);
    oneMaterial.diffuseColor = new Color3(1, 1, 1);
    one.material = oneMaterial;
    cakes.push(one);

    const two: Mesh = Mesh.CreateCylinder('two', 7.62, 25.4, 25.4, 48, 1, this.scene.instance);
    two.position = new Vector3(0, 7.62 / 2 + 10.16, 0);
    two.receiveShadows = true;
    const twoMaterial: StandardMaterial = new StandardMaterial('twoMaterial', this.scene.instance);
    twoMaterial.diffuseColor = new Color3(1, 1, 1);
    two.material = twoMaterial;
    cakes.push(two);



    const sun = new DirectionalLight(
      'sun',
      new Vector3(-1, -2, -1),
      this.scene.instance
    );
    sun.position = new Vector3(100, 100, 100);
    sun.intensity = 0.8;
    const sunShadowGenerator = new ShadowGenerator(1024, sun);
    cakes.map((cake) => sunShadowGenerator.addShadowCaster(cake));



    const ambient: HemisphericLight = new HemisphericLight('HemiLight', new BABYLON.Vector3(0, 1, 0), this.scene.instance);
    ambient.intensity = 0.5;
  }

}
