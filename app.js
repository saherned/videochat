var express = require('express');
var express_peer_server = require('peer').ExpressPeerServer;
var peer_options = {
    debug: true
};

var app = express();

app.get('/', function(req, res, next) { res.send('Hello world!'); });  // added

var server = app.listen(3000);

//app.use('/api', ExpressPeerServer(server, options));   //added
// OR
//var server = require('http').createServer(app); //added

app.use('/peerjs', express_peer_server(server, peer_options));

//server.listen(3000); //added

/*
server.on('connection', function(id) {
    console.log("Connect");
});


server.on('disconnect', function(id) {
    console.log("Disconnect");
});*/
