var events = require("events");

var eventEmitter = new events.EventEmitter();

var connectionHandler = function connected() {
	console.log("connect succeed");
	
	// trigger 'data_received' event
	eventEmitter.emit("data_received");
}


// bind 'connection' event, when this event is trigered, the connectionHandler callback will be executed
eventEmitter.on("connection", connectionHandler);

eventEmitter.on("data_received", function() {
	console.log("data receive succeed");
})

eventEmitter.emit("connection");

console.log("program finished");
