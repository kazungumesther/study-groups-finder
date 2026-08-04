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
        <div className="groups-grid">
          {groups.map((group, index) => (
            <div key={index} className="study-card">
              
              <div className="card-header">
                <h3 className="card-title">{group.title || "Untitled Group"}</h3>
              </div>
              
              <div className="card-body">
                <p><strong>Subject:</strong> {group.subject}</p>
                <p><strong>Meeting date:</strong> {group.meetingdate || "Not set"}</p>
                <p><strong>Meeting time:</strong> {group.meetingtime || "Not set"}</p>
                <p><strong>Members:</strong> {group.members}</p>
              </div>

              <div className="card-actions">
                <div className="membership-buttons">
                  <button className="join-btn" onClick={() => joinGroup(index)}>
                    Join Group
                  </button>
                  <button className="leave-btn" onClick={() => leaveGroup(index)}>
                    Leave Group
                  </button>
                </div>

                <div className="note-row-layout">
                  <input 
                    type="text" 
                    placeholder="Add study notes" 
                    value={noteInputs[index] || ""} 
                    onChange={(e) => handleNoteInputChange(index, e.target.value)} 
                    className="note-input-field" 
                  />
                  <button 
                    className="add-note-btn" 
                    onClick={() => handleNoteSubmit(index)}
                    style={{ width: "100px", height: "44px", padding: "0 12px" }}
                  >
                    Add Note
                  </button>
                </div>

                {group.notes && group.notes.length > 0 && (
                  <div className="notes-box">
                    <h4>Notes</h4>
                    <ul className="notes-display-list">
                      {group.notes.map((noteItem, i) => (
                        <li key={i}>{noteItem}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <button 
                  className="delete-btn" 
                  onClick={() => deleteGroup(index)}
                  style={{ width: "140px", marginTop: "12px" }}
                >
                  Delete Group
                </button>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GroupList;
