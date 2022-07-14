import React from "react";
import {
  ArcRotateCamera, HemisphericLight,
  Vector3,
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

    new HemisphericLight("HemiLight", new Vector3(2, 5, 0), scene);

    // Our built-in 'box' shape.
    box = MeshBuilder.CreateBox("box", { size: 2 }, scene);
  };

  /**
   * Will run on every frame render.  We are spinning the box on y-axis.
   */
  const onRender = () => {
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
