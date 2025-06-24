const { clientApplication } = require('./client')

let FarmerClient = new clientApplication()

FarmerClient.generateAndSubmitTxn(
    "farmer",
    "Admin",
    "autochannel",
    "Kba-Grains",
    "GrainContract",
    "queryTxn",
    "",
    "readGrain",
    "Grain004"
).then(message => {
    console.log(message.toString())
})