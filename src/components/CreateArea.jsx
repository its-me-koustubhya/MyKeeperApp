import React, { useState } from "react";

function CreateArea(props){
  const [newNote,setNote] = useState({title:"",content:""})

  function setNewNote(event){
    const name = event.target.name;
    const value = event.target.value

    setNote(prevValue => {
        if(name === "title"){
              return{
                title: value,
                content: prevValue.content
              }
        }else if(name === "content"){
          return{
            title: prevValue.title,
            content: value
          }
        }
    })
  }

  function submitNote(event){
    props.addOn(newNote) 
    setNote({title:"",content:""})
    event.preventDefault();
  }

   return (
    <div>
    <form>
      <input onChange={setNewNote} name="title" placeholder="Title" value={newNote.title}/>
      <textarea onChange={setNewNote} name="content" placeholder="Take a note..." rows="3" value={newNote.content}/>
      <button onClick={submitNote}>Add</button>
    </form>
  </div>
   )
}

export default CreateArea;