import { inject, injectable } from 'inversify';

import Creator from './components/creator/creator';

@injectable()
export default class App {
  constructor(
    @inject(Creator) creator: Creator,
  ) {
    creator.generate();
  }
}
