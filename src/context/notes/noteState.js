import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = 'http://localhost:5050'
  const initialNotes = []
  const [notes, setNotes] = useState(initialNotes);

  const getallNotes = async()=>{
    const response = await fetch(`${host}/api/notes/fetchallnotes`,{
      method : "GET",
      headers:{
        "Content-Type": "application/json",
        'auth-token':
localStorage.getItem('token')      }
    })
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }
  // ADD A NOTE

  // client side

  const addNote = async (title, discription, tag) => {
    const response = await fetch(`${host}/api/notes/addallnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'auth-token':
localStorage.getItem('token')      },
      body: JSON.stringify({title, discription, tag}),
    });const note =  await response.json();
    console.log("adding a note");
    setNotes(notes.concat(note));
  };

  // DELETE A NOTE

  // client side

  const deleteNote = async (id) => {
    
      const response = await fetch(`${host}/api/notes/deleteallnotes/${id}`,{
        method : "DELETE",
        headers:{
          "Content-Type": "application/json",
          'auth-token':
  localStorage.getItem('token')        }
      })
      const json = await response.json()
      console.log(json)
      
    console.log(`deleting this id ${id}`);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  // EDIT A NOTE
  // server side api call

  // client side
  const editNote = async (id, title, discription, tag) => {
    
    const response = await fetch(`${host}/api/notes/updateallnotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'auth-token':
localStorage.getItem('token')      },
      body: JSON.stringify({title, discription,tag}),
    });
    const json =  await response.json();
    console.log(json)

    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].discription = discription;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes)
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getallNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
