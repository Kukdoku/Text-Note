import React from "react";

function Sidebar({ setActivity, notes, setTaskShow }) {
  
  const setOnClickActivity = (note) => {
    setActivity("note");
    setTaskShow(note);
  };
  return (
    <div
      className="sidebar"
      style={{ backgroundColor: "#2e6099", color: "white", height: "100vh" }}
    >
      <div
        style={{
          border: "1px solid gray",
          padding: "10px",
          backgroundColor: "#114e96",
          cursor: "pointer",
        }}
        onClick={() => setActivity("create")}
      >
        <p>Create New Note📓</p>
      </div>
      <div className="sidebar__notesList">
        {notes.length ? (
          <div>
            <h5 style={{ padding: "5px", border: "1px solid gray" }}>
              All Notes Here
            </h5>
            {notes.map((note) => (
              <div
                key={note.id}
                style={{
                  padding: "10px",
                  border: "1px solid gray",
                  cursor: "pointer",
                }}
                onClick={() => setOnClickActivity(note)}
              >
                <p>{note.title}</p>
                {note.updatedAt ? (
                  <p style={{ fontSize: "12px" }}>
                    <b>updated At: </b>
                    {note.updatedAt.slice(0, 24)}
                  </p>
                ) : (
                  <p style={{ fontSize: "12px" }}>
                    <b>created At: </b>
                    {note.createdAt.slice(0, 24)}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p style={{ padding: "10px" }}>no Notes aveliable</p>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
