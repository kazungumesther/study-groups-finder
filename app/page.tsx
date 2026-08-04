"use client"; 
import { useState } from "react"; 
import GroupForm from "./components/groupForm"; 
import GroupList from "./components/groupList"; 
import { BookOpen } from 'lucide-react'; 
import "./globals.css"; 

interface Group { 
  title: string; 
  completed: boolean; 
  subject: string; 
  members: number; 
  notes: string[]; 
} 

export default function App() { 
  const [groups, setGroups] = useState<Group[]>([]); 
  const [search, setSearch] = useState(""); 

  const addGroup = (group: Group) => { 
    setGroups(prevGroups => [...prevGroups, group]); 
  }; 

  const joinGroup = (index: number) => { 
    setGroups(prevGroups => 
      prevGroups.map((group, i) => 
        i === index ? { ...group, members: group.members + 1 } : group 
      ) 
    ); 
  }; 


  const leaveGroup = (index: number) => {
  setGroups(prevGroups => 
    prevGroups.map((group, i) => 
      i === index ? { ...group, members: Math.max(0, group.members - 1) } : group 
    ) 
  );
};

  const addNote = (index: number, note: string) => { 
    setGroups(prevGroups => 
      prevGroups.map((group, i) => 
        i === index ? { ...group, notes: [...group.notes, note] } : group 
      ) 
    ); 
  }; 

  const deleteGroup = (index: number) => { 
    setGroups(prevGroups => prevGroups.filter((_, i) => i !== index)); 
  }; 

  const filteredGroups = groups.filter((group) => {
    if (!search.trim()) return true;
    return group.subject.toLowerCase().includes(search.toLowerCase());
  });

  return ( 
    <div className="App"> 
      <h1 className="app-title"> 
        <BookOpen className="title-icon" size={32} strokeWidth={2.5} /> 
        Study Group Finder 
      </h1> 
      <GroupForm addGroup={addGroup} /> 
      
      <input 
        type="text" 
        placeholder="Search by subject" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      /> 
      
      <GroupList 
        groups={filteredGroups} 
        joinGroup={joinGroup} 
        leaveGroup={leaveGroup}
        addNote={addNote} 
        deleteGroup={deleteGroup} 
      /> 
    </div> 
  ); 
}
