process.on("message", (msg) => {
    const num = msg.number;
    const result = num * num;
    process.send({result});
})