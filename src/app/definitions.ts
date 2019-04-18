import { Container } from 'inversify';
import 'reflect-metadata';

import App from './app';

const DIContainer = new Container();
DIContainer.bind<App>(App).toSelf().inSingletonScope();

export default DIContainer;
