import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Maze from "./Maze/Maze.js";
import Player from "./Player/Player.js";
import DistanceFinder from "./DistanceFinder/DistanceFinder.js";
import Renderer from "./Renderer/Renderer.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite4 from "./Sprite4/Sprite4.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Maze: new Maze({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 4,
    size: 40,
    visible: true,
    layerOrder: 1
  }),
  Player: new Player({
    x: 18.018096465116937,
    y: -4.246520799379669,
    direction: -120,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  DistanceFinder: new DistanceFinder({
    x: 4.7808364067265,
    y: 0.31143336302052765,
    direction: -71,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Renderer: new Renderer({
    x: 240,
    y: -107.14285714285714,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  Sprite1: new Sprite1({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  }),
  Sprite2: new Sprite2({
    x: 154,
    y: 117,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  Sprite3: new Sprite3({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Sprite4: new Sprite4({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 8
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
