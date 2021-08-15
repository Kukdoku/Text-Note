import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import firebase from "firebase";

function Note({ note, setActivity }) {
  const [openUpdate, setOpenUpdate] = useState(false);
  const [text, setText] = useState(note.body);
  const [updatedAt, setUpdatedAt] = useState(note.updatedAt);

  useEffect(() => {
    setText(note.body);
    setUpdatedAt(note.updatedAt);
  }, [note]);

  const HandleSubmit = async () => {
    await firebase.firestore().collection("notes").doc(note.id).update({
      body: text,
      updatedAt: Date(),
    });

    setOpenUpdate(!openUpdate);
  };

  const HandleChange = (value) => {
    setText(value);
  };

  const HandleDelete = async () => {
    await firebase.firestore().collection("notes").doc(note.id).delete();
    setActivity("create");
  };
  return (
    <div className="note" style={{ margin: "40px" }}>
      <div style={{ display: "flex" }}>
        <h3 style={{ fontWeight: "650" }}>📔{note.title}</h3>
        <button
          style={{
            backgroundColor: "#386ca8",
            border: "1px solid darkblue",
            borderRadius: "2px",
            cursor: "pointer",
            marginLeft: "30px",
          }}
          onClick={HandleDelete}
        >
          ⛔delete task
        </button>
      </div>

      <p style={{ fontSize: "13px", marginLeft: "20px", marginTop: "10px" }}>
        <b>created:</b> 📅 {note.createdAt.slice(0, 24)}{" "}
      </p>
      {updatedAt ? (
        <p style={{ fontSize: "13px", marginLeft: "20px" }}>
          <b>last Updated:</b> 📅 {updatedAt.slice(0, 24)}{" "}
        </p>
      ) : null}

      <h3
        style={{
          marginTop: "30px",
          borderBottom: "1px solid gray",
          marginBottom: "10px",
        }}
      >
        Note's content{" "}
        <span
          onClick={() => setOpenUpdate(!openUpdate)}
          style={{ cursor: "pointer" }}
        >
          🖊️
        </span>
      </h3>
      {openUpdate ? (
        <div>
          <ReactQuill value={text} onChange={HandleChange} />
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
            Update Task
          </button>
        </div>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: text }}></div>
      )}
    </div>
  );
}

export default Note;
