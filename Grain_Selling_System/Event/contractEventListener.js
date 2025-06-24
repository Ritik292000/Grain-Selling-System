const { EventListener } = require('./events')

let FarmerEvent = new EventListener();
FarmerEvent.contractEventListener("farmer", "Admin", "autochannel",
    "Kba-Grains", "GrainContract", "addGrainEvent");

FarmerEvent.contractEventListener("farmer", "Admin", "autochannel",
    "Kba-Grains", "GrainContract", "delGrainEvent");