function getRandomRPC() {
    const rpcUrls = [
        'https://rpc.astranaut.dev/',
        'http://206.189.158.191:8545',
        'http://159.89.202.43:8545'
    ];
    const randomIndex = Math.floor(Math.random() * rpcUrls.length);
    const randomRPC = rpcUrls[randomIndex];
    //console.log('randomRPC: ',randomRPC);
    return new Web3(new Web3.providers.HttpProvider(randomRPC));
}
