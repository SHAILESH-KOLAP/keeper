import React from "react";
import { DELETE } from "./redux/actions/index.js";
import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
function Note(props) {
  const dispatch = useDispatch();
  const DeleteHandler = (e) => {
    dispatch(DELETE(e));
  };
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => DeleteHandler(props.id)}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
