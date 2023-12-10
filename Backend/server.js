const app=require('./app')
const ws = require('ws')
const { verifyToken } = require('./src/util/jwt')
const { msgCreate } = require('./src/controllers/messageController')
const port=process.env.PORT || 9090

let server = app.listen(port,function (){
    console.log(`Server is Running & Port No-${port}`)
})

// let wss = new ws.WebSocketServer({server})

// wss.on('connection',(connected, req) => {
//     let token = req.url.split("=")[1]
//     let {user} = verifyToken(token)
    
//     connected.timer = setInterval(() => {
//         connected.ping();
//         connected.deathTimer = setTimeout(() => {
//             connected.isAlive = false;
//             clearInterval(connected.timer);
//             connected.terminate();
//         }, 1000);
//     }, 5000);

//     connected.on('pong', () => {
//         clearTimeout(connected.deathTimer);
//     });

//     if(user){
//         connected.on('message', async (messege) => {
//             const data = JSON.parse(messege.toString())
//             data.senderId = user.id
//             await msgCreate(data)
//         })



//     }
// })

module.exports = server