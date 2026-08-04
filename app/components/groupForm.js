import { useState } from "react"; 

export default function GroupForm({ addGroup }) { 
  const [title, setTitle] = useState(""); 
  const [subject, setSubject] = useState(""); 
  const [meetingDate, setMeetingDate] = useState(""); 
  const [meetingTime, setMeetingTime] = useState(""); 

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    
    if (!title || !subject) return; 

    const newGroup = { 
      title: title, 
      subject: subject, 
      meetingdate: meetingDate, 
      meetingtime: meetingTime, 
      completed: false, 
      members: 1, 
      notes: [], 
    }; 

    addGroup(newGroup); 

    setTitle(""); 
    setSubject(""); 
    setMeetingDate(""); 
    setMeetingTime(""); 
  }; 

  return ( 
    <form className="group-form" onSubmit={handleSubmit}> 
      <div className="input-group"> 
        <label className="hidden-label">Group Name</label> 
        <input 
          type="text" 
          placeholder="Group Name" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        /> 
      </div> 

      <div className="input-group"> 
        <label className="hidden-label">Subject</label> 
        <input 
          type="text" 
          placeholder="Subject" 
          value={subject} 
          onChange={(e) => setSubject(e.target.value)} 
        /> 
      </div> 

      <div className="input-group"> 
        <label htmlFor="meetingDate">Meeting Date</label> 
        <input 
          id="meetingDate" 
          type="date" 
          value={meetingDate} 
          onChange={(e) => setMeetingDate(e.target.value)} 
        /> 
      </div> 

      <div className="input-group"> 
        <label htmlFor="meetingTime">Meeting Time</label> 
        <input 
          id="meetingTime" 
          type="time" 
          value={meetingTime} 
          onChange={(e) => setMeetingTime(e.target.value)} 
        /> 
      </div> 

      <div className="input-group"> 
        <button type="submit" className="create-btn"> 
          Create Group 
        </button> 
      </div> 
    </form> 
  ); 
}
