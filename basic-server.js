const websocket = require("ws");

const wss = new websocket.Server({ port: 8080 });

wss.on("connection", function connection(ws) {
  console.log("connection");
  ws.on("message", function incoming(message) {
    console.log("received: %s", message);
  });
  ws.on("close", () => {
    console.log("closed");
  });
});
