import React, { useEffect, useState } from "react";

import RangeService from "../../services/range";

import "./index.scss";

const Range = ({ typeRange }) => {
  const isFirst =  typeRange === "first";
  const [initialRange, setInitialRange] = useState(0);
  const [finalRange, setFinalRange] = useState(99);
  const [customContent, setCustomContent] = useState([]);
  const [classNameElement, setClassNameElement] = useState('')

  useEffect(async () => {
    try {
      const {
        data: { min, max, range },
      } =
      isFirst
          ? await RangeService.findFirstExcercise()
          : await RangeService.findSecondExcercise();
      setInitialRange(min);
      setFinalRange(max);
      setCustomContent(range ?? new Array(max + 1).fill().map((_, index) => index));
      setClassNameElement(isFirst ? 'component-range__content--first' : 'component-range__content--second')
    } catch (err) {}
  }, []);

  const ondrop = (e, content) => {
    const droppedItem = e.dataTransfer.getData("drag-item");
    if (droppedItem === "initial" && +content < finalRange) {
      setInitialRange(+content);
    } else if (droppedItem === "final" && +content > initialRange) {
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
      <p className="component-range__text">{initialRange} €</p>
      {customContent.map((content) => (
        <div
          key={content}
          className={`component-range__content ${classNameElement}`}
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
      <p className="component-range__text">{finalRange} €</p>
    </div>
  );
};

export default Range;
