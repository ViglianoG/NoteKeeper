import Trash from "../icons/Trash.jsx";
import { db } from "../appwrite/databases.js";
import { useContext } from "react";
import { NoteContext } from "../context/NoteContext.jsx";

const DeleteButton = ({ noteId }) => {
  const { setNotes } = useContext(NoteContext);

  const handleDelete = async (e) => {
    db.notes.delete(noteId);
    setNotes((prevState) => prevState.filter((note) => note.$id !== noteId));
  };

  return (
    <div onClick={handleDelete}>
      <Trash />
    </div>
  );
};

export default DeleteButton;
