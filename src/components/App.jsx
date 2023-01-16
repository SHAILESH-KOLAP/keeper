import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useSelector } from "react-redux";

function App() {
  const data = useSelector((state) => state.notes);
  console.log(data);
  return (
    <div>
      <Header />
      <CreateArea />
      {data.map((note) => (
        <Note
          key={note.key}
          title={note.title}
          content={note.content}
          id={note.key}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
