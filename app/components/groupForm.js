"use client";
import { useState } from "react";

function GroupForm({ addGroup }) {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingTime, setMeetingTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newGroup = {
      name,
      subject,
      meetingDate,
      meetingTime,
      members: 1,
      notes:[],
    };

    addGroup(newGroup);

    setName("");
    setSubject("");
    setMeetingDate("");
    setMeetingTime("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Group Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <input
        type="date"
        value={meetingDate}
        onChange={(e) => setMeetingDate(e.target.value)}
      />

      <input
        type="time"
        value={meetingTime}
        onChange={(e) => setMeetingTime(e.target.value)}
      />

      <button type="submit">
        Create Group
      </button>
    </form>
  );
}

export default GroupForm;
