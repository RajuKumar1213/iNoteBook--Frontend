import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';

const NoteItem = (props) => {
    const context = useContext(NoteContext);
    const { deleteNote, showAlert } = context;

    //deleting the note ;
    const handleDelete = () => {
        deleteNote(note._id)

        //show alert 
        showAlert("success", "Item is deleted Successfully");
    }

    const { note, updateNote } = props;
    return (
        <>
            <div className="card col-md-4" style={{ margin: "5px", width: "360px" }}>
                <div className="card-body">
                    <div className="d-flex">
                        <h5 className="card-title" style={{ width: "75%" }}>{note.title}</h5>
                        <div className="icons ms-8">
                            <i className="fa-solid fa-trash-can cursor-poiner mx-3" onClick={handleDelete}></i>
                            <i className="fa-solid fa-pen-to-square " onClick={() => { updateNote(note) }}></i>
                        </div>
                    </div>
                    <p className="card-text">{note.description}</p>
                    <span className="badge text-bg-info" >{note.tag}</span>
                </div>
            </div>
        </>
    )
}

export default NoteItem
