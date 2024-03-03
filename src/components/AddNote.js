import React,{useContext,useState} from "react";
import noteContext from '../context/notes/noteContext'


const AddNote = (props) => {

    const context = useContext(noteContext)
    const { addNote } = context
    const [note, setNote]= useState({title :'',discription:'',tag:''} )
    const handleClick=(e)=>{
        e.preventDefault()
        addNote(note.title,note.discription,note.tag);
        setNote({title :'',discription:'',tag:''})
        props.showAlert('Note added successfully','success')
    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]: e.target.value})
    }

  return (
    <div className="container my-4">
      <h1>  Add your note </h1>
      <form className="container my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={note.title}
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
            id="discription"
            name="discription"
            value={note.discription}

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
            id="tag"
            name="tag"
            value={note.tag}

            onChange={onChange}

          />
        </div>
        
        <button disabled={note.title.length < 5 || note.discription.length<5} type="submit" className="btn btn-primary " onClick={handleClick}>
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
