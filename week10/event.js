import event from "events";

const emitter = new event();

emitter.on('loging', () => {
    console.log("User Logged In!");
});

emitter.emit('loging');