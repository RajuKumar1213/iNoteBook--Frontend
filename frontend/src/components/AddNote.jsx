import React, { useContext, useEffect, useState } from 'react'
import NoteContext from '../context/notes/NoteContext';



const AddNote = () => {



    const context = useContext(NoteContext);
    const { addNote , fecthAllNotes , showAlert } = context

    ///show all notes before adding by using useEffect hook it will run only for once
    useEffect(() => {
        fecthAllNotes();
        // eslint-disable-next-line
      }, []);

    const [note, setNote] = useState({title:"" , description:"" , tag:""})

    const handleChange = (e) => {
        setNote({...note , [e.target.name] : e.target.value})
    }
    const handleClick = (e) => {
        addNote(note.title , note.description , note.tag );
        
        if(note.title.length === 0 && note.description.length === 0){
            showAlert("warning" , "Please Enter some text....!");
            
        }
        else if(note.title.length === 0 ){
        showAlert("warning" , "Title filed should not be blank. Please Enter some text...");
        }
        else if(note.description.length === 0 ){
            showAlert("warning" , "Description filed should not be blank. Please Enter some text...");
        }
        else {
            showAlert("success" , "Item added successfully");
        }

        setNote({title:"" , description:"" , tag:""});
    }

    return (
        <div>
            <div className="container my-3">
                <h2>Add Notes</h2>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name='title'  value={note.title} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">description</label>
                    <input type='text' className="form-control" id="description"  name='description' value={note.description} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Tag</label>
                    <input type='text' className="form-control" id="tag"  name='tag' value={note.tag} onChange={handleChange} />
                </div>

                <button className="btn btn-primary" onClick={handleClick}>Add</button>
            </div>
        </div>
    )
}

export default AddNote
