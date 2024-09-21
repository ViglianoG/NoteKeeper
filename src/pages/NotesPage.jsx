import React from "react";
import { fakeData as notes } from "../assets/FakeData";
import NoteCard from "../components/NoteCard.jsx";

const NotesPage = () => {
  return (
    <div>
      {notes.map((note) => (
        <NoteCard note={note} key={note.$id} />
      ))}
    </div>
  );
};

export default NotesPage;
