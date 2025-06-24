const { profile } = require('./profile')
const { Wallets } = require('fabric-network')
const FabricCAServices = require('fabric-ca-client')
const path = require('path')
const fs = require('fs')


async function main(role, caName, mspID) {
    try {
        const orgProfile = profile[role.toLowerCase()]
        const ccp = JSON.parse(fs.readFileSync(orgProfile["CP"], 'utf-8'))
        const caInfo = ccp.certificateAuthorities[caName];
        const ca = new FabricCAServices(caInfo.url);
        const wallet = await Wallets.newFileSystemWallet(orgProfile["Wallet"])
        const identity = await wallet.get('caAdmin');
        if (identity) {
            console.log('An identity for the admin user "caAdmin" already exists in the wallet');
            return;
        }
        const enrollment = await ca.enroll({
            enrollmentID: 'admin',
            enrollmentSecret: 'adminpw'
        });
        const x509Identity = {
            credentials: {
                certificate: enrollment.certificate,
                privateKey: enrollment.key.toBytes()

            },
            mspId: mspID,
            type: 'X.509'
        };
        await wallet.put('caAdmin', x509Identity);
        console.log('Successfully enrolled admin user "caAdmin" and imported it into the wallet');
    } catch (error) {
        console.log(`Failed to enroll admin : ${error}`);
        process.exit(1);
    }
} main("farmer", "ca1.farmer.auto.com", "farmer-auto-com");