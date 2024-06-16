import { newId, newCanvas } from "webgl_lib0";
import React from "react";

const App = () => {
  const canvasHolderRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    canvasHolderRef.current?.appendChild(newCanvas());
  }, []);
  return (
    <div>
      <div>{newId("prefix")}</div>
      <div ref={canvasHolderRef}></div>
    </div>
  );
};

export default App;
