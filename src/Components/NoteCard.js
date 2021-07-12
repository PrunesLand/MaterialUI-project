import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { IconButton, makeStyles, Typography } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';

const useStyles = makeStyles({
    test: {
        border: (note) => {
            if (note.category == 'work') {
                return '1px solid red'
            }
        }
    }
})

function NoteCard({ note, handleDelete }) {

    const classes = useStyles(note)

    return (
        <div>
            <Card elevation={3} className={classes.test}>
                <CardHeader
                    action={
                        <IconButton onClick={() => handleDelete(note.id)} aria-label="settings">
                            <DeleteOutline />
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default NoteCard
