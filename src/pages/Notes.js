import React from 'react'
import { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Container } from '@material-ui/core'
import NoteCard from '../Components/NoteCard'

export default function Notes() {
  const [notes, setNotes] = useState([]) // this stores the data from db.json


  useEffect(() => {
    fetch(' http://localhost:8000/notes') //fetches the json file from local
      .then(res => res.json()) // this turns the fetched data into a json format. must be specified
      .then(data => setNotes(data)) // the created hook stores the fetched json data into the hook variable
  }, [])

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE'
    })

    const newNotes = notes.filter(note => note.id != id)
    setNotes(newNotes)
    console.log('Fucker deleted :}')
  }

  return (
    <Container>
      {/* <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>4</Paper>
        </Grid>
      </Grid> */}
      <Grid container spacing={3}>
        {/* must specify the type of grid used. outer layer typically the container */}
        {/* Each of the items to be displayed must be specified as a grid */}
        {notes.map(note => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
