import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

export default function Create() {
  return (
    <div>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a new note
      </Typography>

      <Button
        onClick={() => console.log('You clicked me')}
        type="submit"
        color="secondary"
        variant="outlined"
        disableElevation
      >Button</Button>

      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  )
}
