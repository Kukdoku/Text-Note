import React, { useState } from "react";
import ReactQuill from "react-quill";
import firebase from "firebase";

function Editor({ userName }) {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const HandleChange = (value) => {
    setText(value);
  };

  const HandleSubmit = async () => {
    await firebase.firestore().collection("notes").add({
      body: text,
      title: title,
      createdAt: Date(),
      userName: userName,
      updatedAt: "",
    });
    setText("");
    setTitle("");
  };
  return (
    <div className="editor" style={{ marginTop: "10px" }}>
      <span style={{ paddingLeft: "10px" }}>note's title</span>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="note's title (only 50character)  "
        maxlength="50"
        style={{
          width: "99%",
          height: "30px",
          marginBottom: "20px",
          backgroundColor: "#b9d1ed",
          border: "none",
          paddingLeft: "10px",
        }}
      />
      <span style={{ paddingLeft: "10px" }}>note's content </span>
      <ReactQuill
        value={text}
        onChange={HandleChange}
        placeholder="write your note..."
      />
      <button
        style={{
          backgroundColor: "#386ca8",
          border: "1px solid darkblue",
          borderRadius: "2px",
          cursor: "pointer",
          margin: "20px",
        }}
        type="submit"
        onClick={HandleSubmit}
      >
        Create Task
      </button>
    </div>
  );
}

export default Editor;
