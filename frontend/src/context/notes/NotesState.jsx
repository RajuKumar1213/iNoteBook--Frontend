import React, {  useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {

  const host = "http://localhost:5000"
  const initialNotes = []

  const [notes, setNotes] = useState(initialNotes)

  // Fetch all notes present in the db
  const fecthAllNotes = async()=>{
     // API CALL :
     const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application-json",
        "auth-token" : localStorage.getItem("token")
      }
    });
    const json =await response.json();
    console.log(json);
    setNotes(json);
  }


  // Add note 
  const addNote = async (title, description, tag) => {
    // API CALL :
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({title , description , tag}),
    });
    const json =await response.json();
    console.log(json)
    // todo api calls

    setNotes(notes.concat(json))
  }

  // DELETE note 
  const deleteNote = async (id) => {

    //API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token") 
      },
     
    });
    const json =await response.json();
    console.log(json)

    const newNote = notes.filter((notes) => { return notes._id !== id });
    setNotes(newNote)
  }

  // EDIT the note
  const editNote = async (id, title, description, tag) => {
    // API CALL :

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({title , description , tag}),
    });
    const json = await response.json();
    // setNotes(json);

    console.log(json)

    let newNotes = JSON.parse(JSON.stringify(notes));
    //Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }

    setNotes(newNotes)
  }
  // showing alert
  const [alert, setAlert] = useState(null);

  const showAlert = (messageType, message) => {

      setAlert({ messageType: messageType, message: message })
      setTimeout(() => {
        setAlert(null);
      }, 2000);

  }

  // //Get the user .

  const [user ,setUser] = useState("");

  const getUser = async () => {
    // API CALL :

    const response = await fetch(`${host}/api/auth/getuser/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      }
    });
    const userJson = await response.json();
    setUser(userJson);
    // console.log(foundUser)
  }


  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, showAlert, alert , fecthAllNotes ,editNote , getUser , user}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;

