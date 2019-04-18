import { inject, injectable } from 'inversify';

import CameraMan from '../camera-man/camera-man';

@injectable()
export default class Creator {

  private cameraMan: CameraMan;

  constructor(
    @inject(CameraMan) cameraMan: CameraMan,
  ) {
    this.cameraMan = cameraMan;
  }

  public generate(): void {
    this.cameraMan.generate();
  }

}
