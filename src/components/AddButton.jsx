import Plus from "../icons/Plus.jsx";
import colors from "../assets/colors.json";
import { useRef } from "react";
import { db } from "../appwrite/databases.js";
import { useContext } from "react";
import { NoteContext } from "../context/NoteContext.jsx";

const AddButton = () => {
  const { setNotes } = useContext(NoteContext);
  const startingPosition = useRef(10);

  const addNote = async () => {
    const payload = {
      position: JSON.stringify({
        x: startingPosition.current,
        y: startingPosition.current,
      }),
      colors: JSON.stringify(colors[0]),
    };
    startingPosition.current += 10;
    const response = await db.notes.create(payload);
    setNotes((prevState) => [response, ...prevState]);
  };

  return (
    <div id="add-btn" onClick={addNote}>
      <Plus />
    </div>
  );
};

export default AddButton;
