"use client";
import { useState } from "react";

function GroupList({ groups, joinGroup ,addNote,deleteGroup}) {
  const[note,setNote] = useState("");

  return (
    <div>
      <h2>Available Study Groups</h2>

      {groups.length === 0 ? (
        <p>No groups yet.</p>
      ) : (
        groups.map((group, index) => (
          <div key={index} className="group-card">
            <h3>{group.name}</h3>

            <p>Subject: {group.subject}</p>

            <p>Meeting: {group.meetingDate}</p>

            <p>Time: {group.meetingTime}</p>

            <p>Members: {group.members}</p>

            <button onClick={() => joinGroup(index)}>
              Join Group
            </button>

            <input
             type="text"
            placeholder="Add study notes"
            value={note}
            onChange={(e) => setNote(e.target.value)}
         />

    


       <button onClick={() => {
         addNote(index, note);
          setNote("");
      }}>
        Add Note
    </button>

    <h4> Notes</h4>

   <ul>
      {group.notes.map((note, i) => (
       <li key={i}>{note}</li>
        ))}
    </ul>

    <button
  className="delete-btn"
  onClick={() => deleteGroup(index)}
>
   Delete Group
</button>


 </div>
        ))
      )}
    </div>
  );
}

export default GroupList;
