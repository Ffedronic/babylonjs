import React, { useState } from "react";
import {
  FreeCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
} from "@babylonjs/core";
import SceneComponent from "../components/babylonComponent";
import PanelControl from "../components/panelControl/panelControl";
let box;

const onSceneReady = (scene) => {
  // This creates and positions a free camera (non-mesh)
  var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

  // This targets the camera to scene origin
  camera.setTarget(Vector3.Zero());

  const canvas = scene.getEngine().getRenderingCanvas();

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.7;

  // Our built-in 'box' shape.
  box = MeshBuilder.CreateBox("box", { size: 2 }, scene);

  // Our built-in 'ground' shape.
  MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
};

/**
 * Will run on every frame render.  We are spinning the box on y-axis.
 */
const onRender = (scene) => {
  if (box !== undefined) {
    // Move the box upward 1/2 its height
    box.rotate.x = 0;
    box.rotate.y = 0;
    box.rotate.z = 0;
  }
};

function rotateX() {
  alert("X clicked");
  
}

function rotateY() {
  alert("Y clicked");
}

function rotateZ() {
  alert("Z clicked");
}

export default () => (
  <div>
    <SceneComponent
      antialias
      onSceneReady={onSceneReady}
      onRender={onRender}
      id="my-canvas"
    />
    <PanelControl rotateX={rotateX} rotateY={rotateY} rotateZ={rotateZ}  />
  </div>
);
