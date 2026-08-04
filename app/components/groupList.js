"use client";
import { useState } from "react";

function GroupList({ groups, joinGroup, leaveGroup, addNote, deleteGroup }) {
  const [noteInputs, setNoteInputs] = useState({});

  const handleNoteInputChange = (index, value) => {
    setNoteInputs((prev) => ({ ...prev, [index]: value }));
  };

  const handleNoteSubmit = (index) => {
    const currentNote = noteInputs[index] || "";
    if (!currentNote.trim()) return;

    addNote(index, currentNote);
    setNoteInputs((prev) => ({ ...prev, [index]: "" }));
  };

  return (
    <div>
      <h2>Available Study Groups</h2>
      {groups.length === 0 ? (
        <p className="no-groups">No groups yet.</p>
      ) : (
        <div className="group-list-container">
          {groups.map((group, index) => (
            <div key={index} className="group-item">
              <h3>{group.title || "Untitled Group"}</h3>
              <p>Subject: {group.subject}</p>
              <p>Meeting date: {group.meetingdate || "Not set"}</p>
              <p>Meeting time: {group.meetingtime || "Not set"}</p>
              <p>Members: {group.members}</p>
              
              <button className="join-btn" onClick={() => joinGroup(index)}>
                Join Group
              </button>

              <button className="leave-btn" onClick={() => leaveGroup(index)}>
                Leave Group
              </button>

              <div className="note-row-layout">
                <input 
                  type="text" 
                  placeholder="Add study notes" 
                  value={noteInputs[index] || ""} 
                  onChange={(e) => handleNoteInputChange(index, e.target.value)} 
                  className="note-input-field"
                />
                <button className="add-note-btn" onClick={() => handleNoteSubmit(index)}>
                  Add Note
                </button>
              </div>

              <h4>Notes</h4>
              <ul className="notes-display-list">
                {group.notes && group.notes.map((noteItem, i) => (
                  <li key={i}>{noteItem}</li>
                ))}
              </ul>

              <button className="delete-btn" onClick={() => deleteGroup(index)}>
                Delete Group
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GroupList;
