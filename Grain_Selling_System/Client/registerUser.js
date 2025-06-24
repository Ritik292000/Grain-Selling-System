const { profile } = require('./profile')
const { Wallets } = require('fabric-network')
const fs = require('fs')
const FabricCAServices = require('fabric-ca-client')

async function main(role, userName, caName, mspID) {

    try {
        const orgProfile = profile[role.toLowerCase()]
        const ccp = JSON.parse(fs.readFileSync(orgProfile["CP"], 'utf-8'))
        const caInfo = ccp.certificateAuthorities[caName];
        const ca = new FabricCAServices(caInfo.url);

        const wallet = await Wallets.newFileSystemWallet(orgProfile["Wallet"])

        // Check to see if we've already enrolled the user.
        const userIdentity = await wallet.get(userName);
        if (userIdentity) {
            console.log(`An identity for the user ${userName} already exists in the wallet`);
            return;
        }

        // Check to see if we've already enrolled the admin user.
        const adminIdentity = await wallet.get('caAdmin');
        if (!adminIdentity) {
            console.log('An identity for the admin user "caAdmin" does not exist in the wallet');
            console.log('Run the enrollAdmin.js application before retrying');
            return;
        }

        // build a user object for authenticating with the CA
        const provider = wallet.getProviderRegistry().getProvider(adminIdentity.type);
        const adminUser = await provider.getUserContext(adminIdentity, 'caAdmin');

        // Register the user, enroll the user, and import the new identity into the wallet.
        const secret = await ca.register({
            enrollmentID: userName,
            role: 'client'
        }, adminUser);
        const enrollment = await ca.enroll({
            enrollmentID: userName,
            enrollmentSecret: secret
        });

        const x509Identity = {
            credentials: {
                certificate: enrollment.certificate,
                privateKey: enrollment.key.toBytes()

            },
            mspId: mspID,
            type: 'X.509'
        };

        await wallet.put(userName, x509Identity);
        console.log(`Successfully registered the user ${userName} and imported it into the wallet`);

    } catch (error) {
        console.log(`Failed to register use: ${userName}`);
        process.exit(1)
    }
}

main('farmer', 'appUser', "ca1.farmer.auto.com", "farmer-auto-com")