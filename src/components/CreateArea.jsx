import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CREATE } from "./redux/actions/index.js";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [key, setKey] = useState("");

  const [isExpanded, setExpanded] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    let date = new Date(); // object of the date class
    let key = date.getTime(); // To get the timestamp
    // dispatch({
    //   type: "ADD",
    //   payload: { key: key, title: title, content: content },
    // });
    dispatch(CREATE({ key: key, title: title, content: content }));
    setTitle("");
    setContent("");
  };

  function expand() {
    setExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
          onClick={expand}
          onChange={(e) => setContent(e.target.value)}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitHandler}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
