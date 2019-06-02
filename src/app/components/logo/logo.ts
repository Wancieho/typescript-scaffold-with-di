import { Color3, Mesh, SceneLoader, StandardMaterial, Texture, Tools, Vector3 } from 'babylonjs';
import 'babylonjs-loaders';
import { inject, injectable } from 'inversify';

import Scene from '../_core/scene/scene';

import meshzor from '../../assets/box.babylon';
import groundTexture from '../../assets/floor.jpg';

@injectable()
export default class Logo {

  constructor(
    @inject(Scene) scene: Scene,
  ) {
    const ground = Mesh.CreateBox('ground', 1, scene.instance);
    ground.scaling = new Vector3(1000, 1, 10);
    ground.position = new Vector3(-500, -0.5, 0);

    const groundMaterial: any = new StandardMaterial('groundMaterial', scene.instance);
    groundMaterial.specularColor = new Color3(0.1, -1, 0.1);
    groundMaterial.diffuseTexture = new Texture(groundTexture, scene.instance);
    groundMaterial.diffuseTexture.uScale = 2;
    groundMaterial.diffuseTexture.vScale = 200;

    ground.material = groundMaterial;

    // SceneLoader.ImportMesh('', '', meshzor,
    SceneLoader.ImportMesh('', '../../assets/', 'box.babylon',
      scene.instance, (newMeshes) => {
        newMeshes.forEach((mesh) => {
          mesh.rotation = new Vector3(Tools.ToRadians(
            45), 0, 0);
        });

        console.debug('SUCCESS', newMeshes);
      },
      (response) => console.debug('PROGRESS', response),
      (response, error) => console.debug('ERROR', error),
    );
  }

}
