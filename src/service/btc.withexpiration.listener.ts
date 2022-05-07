import WebSocket from 'ws'
import { logger } from "./../logger"

export class BtcWithExpirationListener {
    
    constructor() { }

    public async listen() {
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
            logger.info(e.data)
        }
        ws.onopen = function () {
            ws.send(JSON.stringify(msg))
        }
    }
}