import { Container } from 'inversify';
import 'reflect-metadata';

import App from './app';
import Canvas from './components/_core/canvas/canvas';
import Engine from './components/_core/engine/engine';
import Scene from './components/_core/scene/scene';
import CameraMan from './components/camera-man/camera-man';
import Creator from './components/creator/creator';

const DIContainer = new Container();
DIContainer.bind<App>(App).toSelf().inSingletonScope();
DIContainer.bind<Creator>(Creator).toSelf().inSingletonScope();
DIContainer.bind<Engine>(Engine).toSelf().inSingletonScope();
DIContainer.bind<Canvas>(Canvas).toSelf().inSingletonScope();
DIContainer.bind<Scene>(Scene).toSelf().inSingletonScope();
DIContainer.bind<CameraMan>(CameraMan).toSelf().inSingletonScope();

export default DIContainer;
