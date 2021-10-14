function connectWs() {
  console.log("load");
  var ws = new WebSocket("ws://localhost:8080");
  ws.onopen = () => {
    console.log("hello");
    ws.send("hello");
  };
  window._ws = ws;
}

function disconnectWs(from) {
  console.log(from);
  if (window._ws) {
    console.log("send");
    window._ws.send(from);
    window._ws.close();
    window._ws = null;
  }
}
