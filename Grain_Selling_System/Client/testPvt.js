const { clientApplication } = require('./client');

let distributorClient = new clientApplication();
const transientData = {
    grainName: Buffer.from('Rice'),
    price: Buffer.from('1600'),
    quantity: Buffer.from('4')
}

distributorClient.generateAndSubmitTxn(
    "distributor",
    "Admin",
    "autochannel",
    "Kba-Grains",
    "OrderContract",
    "privateTxn",
    transientData,
    "requestOrder",
    "Order004"
).then(msg => {
    console.log(msg.toString())
});