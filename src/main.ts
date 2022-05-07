import { App } from "./app";
import { BtcPerpetualListener } from "./service/btc.perpetual.listener";
import { BtcWithExpirationListener } from "./service/btc.withexpiration.listener";

// init and run listeners
const btcPerpetualListener: BtcPerpetualListener = new BtcPerpetualListener();
const btcWithExpirationListener: BtcWithExpirationListener = new BtcWithExpirationListener();

btcPerpetualListener.listen();
btcWithExpirationListener.listen();

// init and run express server
const app: App = new App();
app.init()