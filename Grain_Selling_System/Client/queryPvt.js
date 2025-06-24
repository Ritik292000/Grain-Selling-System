const { clientApplication } = require('./client')

let DistributorClient = new clientApplication()

DistributorClient.generateAndSubmitTxn(
    "distributor",
    "Admin",
    "autochannel",
    "Kba-Grains",
    "OrderContract",
    "queryTxn",
    "",
    "readOrder",
    "Order001"
).then(message => {
    console.log(message.toString())
})