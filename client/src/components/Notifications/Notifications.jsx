import React, { useContext } from 'react'

import { SocketContext } from '../../contexts/SocketContext'

const Notifications = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext)

    return (
        <>
            {call.isRecivedCall && !callAccepted && (
                <div style={{ display: 'flex', justifyContent: "center" }}>
                    <h1>{call.name} is calling: </h1>
                </div>
            )}
        </>
    )
}

export default Notifications
