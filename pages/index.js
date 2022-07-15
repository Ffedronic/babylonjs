import React, { useState } from "react";
import {
  ArcRotateCamera,
  HemisphericLight,
  Vector3,
  MeshBuilder,
} from "@babylonjs/core";
import SceneComponent from "../components/babylonComponent";
import PanelControl from "../components/panelControl/panelControl";

function BabyloneJsPage() {
  /* A variable that will be used to store the box object. */
  let box;

  const onSceneReady = (scene) => {
    /* Creating a new camera object. */
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

    /* Getting the canvas element from the scene. */
    const canvas = scene.getEngine().getRenderingCanvas();

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    /* Creating a light source. */
    new HemisphericLight("HemiLight", new Vector3(2, 5, 0), scene);

    // Our built-in 'box' shape.
    box = MeshBuilder.CreateBox("box", { size: 2 }, scene);
  };

  /* Creating a state variable and a function to update the state variable. */
  const [alpha, setAlpha] = useState(0);
  const [beta, setBeta] = useState(0);
  const [gamma, setGamma] = useState(0);

  /**
   * "If the box is defined, rotate it based on the device's orientation."
   * 
   * The first line of the function checks to see if the box is defined. If it is, the next three lines
   * rotate the box based on the device's orientation
   */
  const onRender = () => {
    if (box !== undefined) {
      box.rotation.x = alpha;
      box.rotation.y = beta;
      box.rotation.z = gamma;
    }
  };

  function rotateX() {
    setAlpha((previousState) => previousState + Math.PI / 16);
  }

  function rotateY() {
    setBeta((previousState) => previousState + Math.PI / 16);
  }
  function rotateZ() {
    setGamma((previousState) => previousState + Math.PI / 16);
  }
  function reset() {
    setAlpha(0);
    setBeta(0);
    setGamma(0);
  }

  return (
    <div>
      <SceneComponent
        antialias
        onSceneReady={onSceneReady}
        onRender={onRender}
        id="my-canvas"
      />
      <PanelControl
        rotateX={rotateX}
        rotateY={rotateY}
        rotateZ={rotateZ}
        reset={reset}
      />
    </div>
  );
}

export default BabyloneJsPage;
