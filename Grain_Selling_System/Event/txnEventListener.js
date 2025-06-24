const { EventListener } = require('./events')

let FarmerEvent = new EventListener();
FarmerEvent.txnEventListener("farmer", "Admin", "autochannel",
    "Kba-Grains", "GrainContract", "createGrain",
    "Grain006", "Barley", "1900", "9");