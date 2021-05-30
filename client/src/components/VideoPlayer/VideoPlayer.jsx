import { Grid, Paper, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { SocketContext } from '../../contexts/SocketContext'

import useStyles from './styles'

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext)
    const classes = useStyles()

    return (
        <Grid container className={classes.gridContainer}>
            <Paper className={classes.paper}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
                    <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
                </Grid>
            </Paper>
            <Paper className={classes.paper}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>Name</Typography>
                    <video playsInline ref={null} autoPlay className={classes.video} />
                </Grid>
            </Paper>
        </Grid>
    )
}

export default VideoPlayer
