import NotesPage from "./pages/NotesPage.jsx";
import NoteProvider from "./context/NoteContext.jsx";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div id="app">
      <NoteProvider>
        <NotesPage />
        <ToastContainer
          autoClose={2000}
          newestOnTop
          theme="colored"
          position="bottom-right"
        />
      </NoteProvider>
    </div>
  );
}

export default App;
