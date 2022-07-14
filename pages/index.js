import React from "react";
import {
  ArcRotateCamera,
  FreeCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
} from "@babylonjs/core";
import SceneComponent from "../components/babylonComponent";
import PanelControl from "../components/panelControl/panelControl";

function BabyloneJsPage() {
  let box;

  const onSceneReady = (scene) => {
    // Parameters: name, alpha, beta, radius, target position, scene
    var camera = new ArcRotateCamera(
      "Camera",
      0,
      0,
      10,
      new Vector3(0, 0, 0),
      scene
    );

    // Positions the camera overwriting alpha, beta, radius
    camera.setPosition(new Vector3(0, 0, 20));

    const canvas = scene.getEngine().getRenderingCanvas();

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'box' shape.
    box = MeshBuilder.CreateBox("box", { size: 2 }, scene);
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

  return (
    <div>
      <SceneComponent
        antialias
        onSceneReady={onSceneReady}
        onRender={onRender}
        id="my-canvas"
      />
      <PanelControl rotateX={rotateX} rotateY={rotateY} rotateZ={rotateZ} />
    </div>
  );
}

export default BabyloneJsPage;
