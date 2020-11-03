import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import axios from 'axios'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('... a new note')
  const [showAll, setShowAll] = useState(true)
  
  useEffect(() => {
    console.log('effect')
      noteService
      .getAll()
      .then(initialNotes => {
        console.log('promise fulfilled')
        setNotes(initialNotes)
      })
      .catch(error => {
        console.log('promise failed:', error)
      })
  }, [])



const addNote = (event) => {
  event.preventDefault()
  const noteObject = {
    content: newNote,
    date: new Date().toISOString(),
    important: Math.random() < 0.5,
  }

  noteService
    .create(noteObject)
    .then(returnedNote => {
      setNotes(notes.concat(returnedNote))
      setNewNote('')
    })
    .catch(error => {
      console.log('create object failed:', error)
    })
}

const handleNoteChange = (event) => {
  console.log(event.target.value)
  setNewNote(event.target.value)
}

const notesToShow = showAll 
  ? notes 
  : notes.filter(note => note.important === true)

  const toggleImportanceOf = id => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
  
    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
       })
       .catch(error => {
        alert(
          `the note '${note.content}' was already deleted from server`
        )
        setNotes(notes.filter(n => n.id !== id))
      })
  }

return (
  <>
    <h1>Notes</h1>
    <section>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'important' : 'all'}
      </button>
    </section>
    <ul>
      {notesToShow.map(note => 
        <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}/>
      )}
    </ul>
    <form onSubmit={addNote}>
      <input 
        value={newNote} 
        onChange={handleNoteChange}/>
  <button type="submit" style={{marginLeft: "1rem", backgroundColor: "#BFDFC9", color: "#8F1E5D"}}>save</button>
    </form> 
  </>
)}

  export default App