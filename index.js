const app = require('express')()
const server = require('http').createServer(app)
const cors = require('cors')

const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
})

app.use(cors())

const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send('Server is running!')
})

io.on('connection', (socket) => {
    socket.emit('me', socket.id)

    socket.on('disconnect', () => {
        socket.broadcast.emit('callended')
    })

    socket.io('calluser', ({ userToCall, signalData, from, name }) => {
        io.to(userToCall).emit('calluser')
    })
})

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
