import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App(){

  const [noteArray, setNoteArray] = useState([])

  function addNote(newNote){
   setNoteArray(prevNote => {
    return [...prevNote, newNote]
  })
  }

  function deleteTheNote(id){
    setNoteArray(prevValue => {
      return prevValue.filter((noteItem,index) => {
        return index !== id
      })
    })
  }

 return (
  <div>
  <Header />
  <CreateArea  addOn={addNote}/>
  {noteArray.map((note,index) => (
    <Note delete={deleteTheNote} key={index} id={index} title = {note.title} content = {note.content}/>
  ))}
  <Footer />
  </div> 
 )
}

export default App;