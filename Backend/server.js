const app=require('./app')
const { verifyToken } = require('./src/util/jwt')
const { msgCreate } = require('./src/controllers/messageController')
const port=process.env.PORT || 9090
const {Server} = require('socket.io')

let server = app.listen(port,function (){
    console.log(`Server is Running & Port No-${port}`)
})


const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        credentials: true
    }
})

io.on('connection', (socket) => {
    socket.on('join-room', (room) => {
        socket.join(room)
    })
    
    socket.on('send-message', async (data) => {
        await msgCreate(data.msg)
        socket.to(data.receiever).emit("receive-message", data.msg)
    })

})

module.exports = server