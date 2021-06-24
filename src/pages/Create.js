import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({

})

export default function Create() {

  const classes = useStyles()

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
        startIcon={<AcUnitOutlinedIcon />}
        disableElevation
      >
        Button
      </Button>

      <AcUnitOutlinedIcon color="secondary" fontSize="small" />

      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  )
}
