For understanding of WebSockets(WS):

What are WS?
WebSockets are a communication protocol providing full-duplex communication channels over a single TCP connection. 
Unlike traditional HTTP communication, which is request-response based, WebSockets allow for continuous two-way interaction between a client (such as a web browser) and a server. 
This means that both parties can send and receive messages independently and asynchronously.
Handshake:
The WebSocket handshake is a process used to establish a WebSocket connection between a client and a server.
How is it established?
  the client initiates the handshake by sending an HTTP request to the server with an Upgrade header.
  the server responds with an HTTP 101 status code if it supports WebSockets and agrees to the upgrade. The response includes headers indicating that the connection has been upgraded.
