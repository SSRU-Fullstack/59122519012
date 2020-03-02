
/*
In the node.js intro tutorial (http://nodejs.org/), they show a basic tcp 
server, but for some reason omit a client connecting to it.  I added an 
example at the bottom.
Save the following server in example.js:
*/

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var net = require('net');

var server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
	// socket.pipe(socket);
	socket.on('data', function(data) {
		utf8 = data.toString('utf8');
		socket.write("\r\nServer : " + utf8+"\r\n\r\nInput:")
		// client.destroy(); // kill client after server's response
		// rl.question("Say It :",(input) => {
		// 	client.write(input);
		// })
	});
});

server.listen(1337, '127.0.0.1');

// server.on('date',(input)=>{
// 	server.write("Server : "+input)
// })
// rl.on('line', (input) => {
// 	client.write(input);
//   });

/*
And connect with a tcp client from the command line using netcat, the *nix 
utility for reading and writing across tcp/udp network connections.  I've only 
used it for debugging myself.
$ netcat 127.0.0.1 1337
You should see:
> Echo server
*/

/* Or use this example tcp client written in node.js.  (Originated with 
example code from 
http://www.hacksparrow.com/tcp-socket-programming-in-node-js.html.) */

var net = require('net');

var client = new net.Socket();
client.connect(1337, '127.0.0.1', function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');

});

// client.on('data', function(data) {
// 	// console.log('Received: ' + data);
// 	// client.destroy(); // kill client after server's response
// 	rl.question("Say It :",(input) => {
// 		client.write(input);
// 	})
// });

client.on('close', function() {
	console.log('Connection closed');
});