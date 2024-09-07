const net = require('net');
const server = net.createServer((socket) => {
    //handle all the incoming connections here
    console.log("Client connected");
    socket.on('data', (data) => {
        //handle the data here
        //the first thing to do when the client sends connection is to upgrade the connection to a WS connection
        //the above is called a handshake
        //since data comes in bytes we convert it to string
        const req = data.toString();
        //when req is made to make a WS connection it is a GET request so we will check for it
        if(req.startsWith('GET')){
            socket.write(
                'HTTP/1.1 101 Web Socket Protocol Handshake\r\n' +
                'Upgrade: WebSocket\r\n' +
                'Connection: Upgrade\r\n' +
                'WebSocket-Origin: http://localhost\r\n' +
                'WebSocket-Location: ws://localhost:8080/\r\n' +
                '\r\n'
            )
        }else{
            //if WS connection is already established we will send the data in the form of messages
            const message = req.slice(req.indexOf('\r\n\r\n') + 4);
            console.log(`Received message: ${message}`);
            socket.write(`Message was: ${message}`)
        }

    })
    
});
server.listen(3000, ()=>{
    console.log("The WebSocket is listening on port 3000");
});