import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { ContextProvider } from './contexts/SocketContext'
import './styles.css'

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>,
    document.querySelector('#root')
)
