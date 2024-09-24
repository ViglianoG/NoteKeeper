import React, { useRef, useEffect, useState } from "react";
import Trash from "../icons/Trash.jsx";
import { setNewOffSet, autoGrow, setZIndex, bodyParser } from "../utils.js";
import { db } from "../appwrite/databases.js";

const NoteCard = ({ note }) => {
  const body = bodyParser(note.body);
  const [position, setPosition] = useState(JSON.parse(note.position));
  const colors = JSON.parse(note.colors);

  let mouseStartPosition = { x: 0, y: 0 };
  const cardRef = useRef(null);

  const textAreaRef = useRef(null);

  useEffect(() => {
    autoGrow(textAreaRef);
  }, []);

  const mouseDown = (e) => {
    setZIndex(cardRef.current);

    mouseStartPosition.x = e.clientX;
    mouseStartPosition.y = e.clientY;

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
  };

  const mouseMove = (e) => {
    const mouseMoveDir = {
      x: mouseStartPosition.x - e.clientX,
      y: mouseStartPosition.y - e.clientY,
    };

    mouseStartPosition.x = e.clientX;
    mouseStartPosition.y = e.clientY;

    const newPosition = setNewOffSet(cardRef.current, mouseMoveDir);
    setPosition(newPosition);
  };

  const mouseUp = () => {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);

    const newPosition = setNewOffSet(cardRef.current);
    db.notes.update(note.$id, { position: JSON.stringify(newPosition) });
  };

  return (
    <div
      className="card"
      style={{
        backgroundColor: colors.colorBody,
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      ref={cardRef}
      onMouseDown={mouseDown}
    >
      <div
        className="card-header"
        style={{ backgroundColor: colors.colorHeader }}
      >
        <Trash />
      </div>

      <div className="card-body">
        <textarea
          ref={textAreaRef}
          style={{ color: colors.colorText }}
          defaultValue={body}
          onInput={() => {
            autoGrow(textAreaRef);
          }}
          onFocus={() => {
            setZIndex(cardRef.current);
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default NoteCard;
