import React, { useContext, useEffect, useRef ,useState} from "react";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import Notesitem from "./Notesitem";
import {useNavigate} from 'react-router-dom';


const Notes = (props) => {
  let navigate = useNavigate()
  const context = useContext(noteContext);
  const { notes, getallNotes ,editNote} = context;
  useEffect(() => {
    if(localStorage.getItem('token')){
      getallNotes();
    }else{
      navigate('/login')
    }
    // eslint-disable-next-line
  }, []);
 
  const ref = useRef(null);
  const refClose = useRef(null);

  const [note, setNote]= useState({id : "",etitle :'',ediscription:'',etag:'default'} )
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id : currentNote._id,etitle : currentNote.title, ediscription:currentNote.discription,etag:currentNote.tag})
    
  };
  const handleClick=(e)=>{
    editNote(note.id, note.etitle,note.ediscription,note.etag)
    refClose.current.click()
    props.showAlert('Note updated successfully','success')
}
const onChange=(e)=>{
    setNote({...note,[e.target.name]: e.target.value})
}


  return (
    <>
      <AddNote showAlert = {props.showAlert}/>
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
       
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="container my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    value={note.etitle}
                    name="etitle"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="discription" className="form-label">
                    Discription
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ediscription"
                    value={note.ediscription}
                    name="ediscription"
                    onChange={onChange}
                    minLength={5}
                    required

                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    value={note.etag}
                    name="etag"
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref = {refClose}
              >
                Close
              </button>
              <button disabled={note.etitle.length < 5 || note.ediscription.length<5} type="button"  onClick={handleClick} className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h1> Your notes</h1>
        {notes.length===0 && <h5 style={{ textAlign: 'center' }}>No notes to Display</h5>}

        {notes.map((note) => {
          return (
            <Notesitem key={note._id} updateNote={updateNote} showAlert ={props.showAlert} note={note} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
