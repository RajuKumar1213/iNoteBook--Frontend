import React, { useContext, useRef, useState } from 'react'
import NoteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Note = () => {
  const context = useContext(NoteContext);
  const { notes , editNote , showAlert} = context
  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id : currentNote._id ,etitle : currentNote.title , edescription : currentNote.description , etag : currentNote.tag});
  }

  const ref = useRef(null);
  const refClose = useRef(null);


  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  const handleClick = () => {
    editNote(note.id , note.etitle , note.edescription , note.etag);
    showAlert("success" , "Note is updated successfully !")
    refClose.current.click();
}

  return (
    <>
      <AddNote />

      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className='container'>
              <div className="mb-3">
                <label htmlFor="etitle" className="form-label">Title</label>
                <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="edescription" className="form-label">description</label>
                <input type='text' className="form-control" id="edescription" name='edescription'  value={note.edescription} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="etag" className="form-label">Tag</label>
                <input type='text' className="form-control" id="etag" name='etag'  value={note.etag} onChange={handleChange} />
              </div>
            </div>

            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <h2>Your Notes</h2>
        <div className='row'>
          {notes.map(note => {
            return <NoteItem key={note._id} note={note} updateNote={updateNote} />
          })}
        </div>
      </div>
    </>
  )
}

export default Note
