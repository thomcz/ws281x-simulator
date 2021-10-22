const { Server } = require("socket.io");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {updateLeds, getLedState, initializeLedState} = require("./LedState")
const port = 4000;

const server = app.listen(port, () =>{
    console.log("Server listening at %s", port)
})

const io = new Server(server);

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.post('/brightness', (req, res) => {   
    io.emit("text", req.body.test)
    
    res.status(200)
    res.send({})
 })

 app.post('/show', (req, res) => {   
    io.emit("text", getLedState())
    
    res.status(200)
    res.send({})
 })

 app.post('/setPixelColor', (req, res) => {  
    const newLed = req.body
    console.log(newLed) 

    updateLeds(newLed)

    res.status(200)
    res.send({})
 })

 app.get('/numPixels', (req, res) => {   
    io.emit("text", req.body.test)
    
    res.status(200)
    res.send({})
 })
 
 app.post('/newPixelStrip', (req, res) => {  
   
   initializeLedState();
   
   res.status(200)
   res.send({})
})

app.post('/begin', (req, res) => {  
   // set some var, check if var is set in all calls and throw error if not (Intialize the library (must be called once before other functions).)
   
   res.status(200)
   res.send({})
})

io.on('connection', (socket) => {  console.log('a user connected');});

