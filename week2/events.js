import event from 'events'

const myEvent = new event();

myEvent.on("main", () => {
    console.log("Event emitted");
});

myEvent.emit("main");