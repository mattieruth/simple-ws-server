# simple-ws-server

This repo has two things:

1. basic-server.js: Implements a very. basic. websocket server and prints any message it gets as well as when there's a new connection or a connection is closed

2. basic-client.html: A very. basic. webpage that:
   1. connects to the websocket on 'load'
   2. sends a last message and closes the websocket on 'unload' or 'beforeunload' (your choice based on what you've got uncommented :) )

## running

### run the server

```bash
npm i
npm run serve
```

### run the client

1. open /path/to/basic-client.html in the browser of choice
2. open the console and be sure to have it set to preserve logs
3. try refreshing/navigating away/closing the tab and watching the output in the server to see when unload/beforeunload succeeds

## results

On 10.14.21, [here were the results](https://docs.google.com/spreadsheets/d/1EVlkp4qVVPBuVxXjrZmlllOVpRh1u4VTsszMzGMKiKs/edit?usp=sharing) of this test
