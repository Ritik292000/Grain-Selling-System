const { EventListener } = require('./events')

let FarmerEvent = new EventListener();
FarmerEvent.blockEventListener("farmer", "Admin", "autochannel");