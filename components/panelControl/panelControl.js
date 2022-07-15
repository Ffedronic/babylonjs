function PanelControl(props) {
  const { rotateX, rotateY, rotateZ, reset } = props;
  return (
    <div>
      <button type="button" onClick={rotateX}>
        Rotate X
      </button>
      <button type="button" onClick={rotateY}>
        Rotate Y
      </button>
      <button type="button" onClick={rotateZ}>
        Rotate Z
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default PanelControl;
