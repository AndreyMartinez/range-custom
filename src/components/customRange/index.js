import React, { useState } from "react";
import "./index.scss";

const CustomRange = ({}) => {
  const [customContent, _] = useState(
    new Array(100).fill().map((_, index) => index)
  );
  const [initialRange, setInitialRange] = useState(0);
  const [finalRange, setFinalRange] = useState(99);

  const ondrop = (e, content) => {
    const droppedItem = e.dataTransfer.getData("drag-item");
    if (droppedItem === "initial") {
      setInitialRange(+content);
    } else {
      setFinalRange(+content);
    }
  };

  const drag = (e, content) => {
    e.dataTransfer.setData("drag-item", content);
  };
  const dragOver = (ev) => {
    ev.preventDefault();
  };

  return (
    <div className="component-range">
      <p className="component-range__text">{initialRange}</p>
      {customContent.map((content) => (
        <div
          key={content}
          className="component-range__content"
          onDrop={(e) => ondrop(e, content)}
          onDragOver={dragOver}
        >
          {initialRange === content && (
            <div
              draggable
              onDragStart={(e) => drag(e, "initial")}
              className="component-range__selected"
            />
          )}
          {finalRange === content && (
            <div
              draggable
              onDragStart={(e) => drag(e, "final")}
              className="component-range__selected"
            />
          )}
        </div>
      ))}
      <p className="component-range__text">{finalRange}</p>
    </div>
  );
};

export default CustomRange;
