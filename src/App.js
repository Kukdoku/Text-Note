import "./App.css";
import firebase from "firebase";
import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Note from "./components/Note";
import Editor from "./components/Editor";

function App() {
  const [notes, setNotes] = useState([]);

  const [activity, setActivity] = useState("create");
  const [userName, setUserName] = useState("");
  const [taskShow, setTaskShow] = useState("");

  useEffect(() => {
    const user = prompt("write a valid  name(space not be identity)");
    const getNotes = async (username) => {
      console.log("hello");
      await firebase
        .firestore()
        .collection("notes")
        .where("userName", "==", username)
        .onSnapshot((snapshot) => {
          setNotes(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });
    };

    if (user) {
      if (user.trim() !== "") {
        setUserName(user.trim());

        getNotes(user.trim());
      } else {
        window.location.reload();
      }
    } else {
      window.location.reload();
    }
  }, []);

  return (
    <div className="app">
      <Header username={userName} />
      <div style={{ display: "grid", gridTemplateColumns: "30% 70%" }}>
        <Sidebar
          userName={userName}
          setActivity={setActivity}
          notes={notes}
          setTaskShow={setTaskShow}
        />
        {activity === "create" ? (
          <Editor userName={userName} />
        ) : (
          <Note note={taskShow} setActivity={setActivity} />
        )}
      </div>
      <div></div>
    </div>
  );
}

export default App;
