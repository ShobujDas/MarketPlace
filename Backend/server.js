const app=require('./app')
const port=process.env.PORT || 9090

app.listen(port,function (){
    console.log(`Server is Running & Port No-${port}`)
})
