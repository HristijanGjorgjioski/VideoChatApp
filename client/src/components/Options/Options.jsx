import React, { useContext, useState } from 'react'

import useStyles from './styles'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons'
import { SocketContext } from '../../contexts/SocketContext'
import { Button, Container, Grid, Paper, TextField, Typography } from '@material-ui/core'

const Options = ({ children }) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext)
    const [idToCall, setIdToCall] = useState('')
    const classes = useStyles()

    return (
        <Container className={classes.container}>
            <Paper elevation={10} className={classes.paper}>
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid container className={classes.gridContainer}>
                        <Grid item xs={12} md={6} className={classes.padding}>
                            <Typography gutterBottom variant="h6">Account Info</Typography>
                            <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                            <CopyToClipboard text={me} className={classes.margin}>
                                <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
                                    
                                </Button>
                            </CopyToClipboard>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Options
