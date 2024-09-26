import NoteCard from "../components/NoteCard.jsx";
import { useContext } from "react";
import { NoteContext } from "../context/NoteContext.jsx";

const NotesPage = () => {
  const { notes } = useContext(NoteContext);
  return (
    <div>
      {notes.map((note) => (
        <NoteCard note={note} key={note.$id} />
      ))}
    </div>
  );
};

export default NotesPage;
