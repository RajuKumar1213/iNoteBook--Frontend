import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';

const Alert = () => {
    
    const Captalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const context = useContext(NoteContext);
    const { alert } = context;

    return (
        <div >
           {alert && <div className={`fixed-top alert alert-${alert.messageType}`} role="alert">
              <strong> {Captalize(alert.messageType)} : </strong> {alert.message}
            </div>}
        </div>
    )
}

export default Alert
