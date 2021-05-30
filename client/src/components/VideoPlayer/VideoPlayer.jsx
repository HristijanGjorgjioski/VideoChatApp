import { Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'

import useStyles from './styles'

const VideoPlayer = () => {
    const {  } = {}
    const classes = useStyles()

    return (
        <Grid container className={classes.gridContainer}>
            <Paper className={classes.paper}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>Name</Typography>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default VideoPlayer
