// Node server which will handle socket.io connections.
// we are using socket.io to reconnect the user again when it comes online.

const io = require('socket.io')(8000);

const users = {};

// io.on listens all the connections
// and socket.on a handles particular connection.

io.on('connection',socket=>{
    socket.on('new-user-joined',name =>{
        users[socket.id] = name;
        socket.broadcast.emit('user-joined',name);
    });
    socket.on('send',message =>{
        socket.broadcast.emit('receive',{message:message,name:users[socket.id]})
    })
})







