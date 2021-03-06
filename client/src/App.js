import React from 'react'
import { Typography, AppBar } from '@material-ui/core'

import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import Options from './components/Options/Options'
import Notifications from './components/Notifications/Notifications'

import useStyles from './styles'

const App = () => {
    const classes = useStyles()

    return (
        <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center">Video Chat</Typography>
            </AppBar>
            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
        </div>
    )
}

export default App
