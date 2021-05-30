import React, { useContext, useState } from 'react'

import useStyles from './styles'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Assigment, Phone, PhoneDisabled } from '@material-ui/icons'
import { SocketContext } from '../../contexts/SocketContext'
import { Container, Paper } from '@material-ui/core'

const Options = ({ children }) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext)
    const [idToCall, setIdToCall] = useState('')
    const classes = useStyles()

    return (
        <Container className={classes.container}>
            <Paper>
                
            </Paper>
        </Container>
    )
}

export default Options
