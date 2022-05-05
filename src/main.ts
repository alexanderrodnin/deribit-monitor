import WebSocket from 'ws'

async function main() {
    var msg = 
    {
        "jsonrpc": "2.0",
        "method": "public/subscribe",
        "id": 42,
        "params": {
        "channels": ["book.BTC-PERPETUAL.100ms"]}
    }
    var ws = new WebSocket('wss://test.deribit.com/ws/api/v2');
    ws.onmessage = function (e) {
        // do something with the notifications...
        console.log('received from server : ', e.data);
    }
    ws.onopen = function () {
        ws.send(JSON.stringify(msg));
    }

}

// BTC with expiration
function main2() {
    var msg = 
    {
        "jsonrpc": "2.0",
        "method": "public/subscribe",
        "id": 42,
        "params": {
        "channels": ["book.BTC-31MAR23.100ms"]}
    }
    var ws = new WebSocket('wss://test.deribit.com/ws/api/v2')
    ws.onmessage = function (e) {
        // do something with the notifications...
        console.log('received from server : ', e.data)
    }
    ws.onopen = function () {
        ws.send(JSON.stringify(msg))
    }
}

main()
main2()
