import { Scene as BabylonScene } from 'babylonjs';
import { inject, injectable } from 'inversify';

import Engine from '../engine/engine';

@injectable()
export default class Scene {
  public instance: BabylonScene;

  constructor(
    @inject(Engine) engine: Engine,
  ) {
    this.instance = new BabylonScene(engine.instance);
    this.instance.gravity = new BABYLON.Vector3(0, -9.81, 0);
    this.instance.collisionsEnabled = true;

    window.onresize = () => {
      engine.instance.resize();
    };

    engine.instance.runRenderLoop(() => {
      this.instance.render();
    });
  }
}
