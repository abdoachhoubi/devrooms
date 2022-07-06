const express = require( "express" );
const http = require( "http" );
const path = require( "path" );
const socketio = require( "socket.io" );

// Creating an Express App
const app = express();

// Setting up the server

const server = http.createServer( app );

// Starting a socket connection when a client connects
const io = socketio( server );

io.on( 'connection', ( socket ) => console.log( 'new websocket connection' ) );



// Set static folder (Frontend)
app.use( express.static( path.join( __dirname, "../frontend" ) ) );

const PORT = 8000;


server.listen( PORT, () => {
    console.log( "Server running on port 8000" );
} );


