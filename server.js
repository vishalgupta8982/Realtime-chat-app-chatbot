const express=require('express');
const fs=require('fs');
const path = require('path');
const app=express();
const http=require('http').createServer(app)
const PORT=2000 || process.env.PORT;
http.listen(PORT,()=>console.log(`SERVER RUNNNING ON PORT ${PORT}`));

 app.use(express.static(__dirname+'/public'))
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/index.html'));
  });

  //socket
  const io=require('socket.io')(http)
  io.on('connection',(socket)=>{
    console.log('connected..')
  socket.on('message',(msg)=>{
  socket.broadcast.emit('message',msg)
  })
  })