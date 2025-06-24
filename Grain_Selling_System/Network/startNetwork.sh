#!/bin/sh

echo "starting the network"
minifab netup -s couchdb -e true -o farmer.auto.com

sleep 5

echo "Creating the channel"
minifab create -c autochannel

sleep 2

echo "Join the peers to channel"
minifab join -c autochannel

sleep 2

echo "Anchor update"
minifab anchorupdate

sleep 2

echo "Generate the required materials"
minifab profilegen -c autochannel
