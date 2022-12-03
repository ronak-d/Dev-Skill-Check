import React, { useEffect, useState } from 'react'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  useAccount,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
// import { publicProvider } from 'wagmi/providers/public';
import { YourComponent } from './Components/YourComponent';
import { Network, Alchemy } from 'alchemy-sdk';
import axios from 'axios';
import NFTbox from './Components/NFTbox/NFTbox';


const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum, chain.goerli],
  [
    alchemyProvider({ apiKey: "zoZR88ybkJbA8DtyfxId-VJQlrJm2D6U" }),
    // publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'mint-nft',
  chains
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function App() {
  const {address, isConnected} = useAccount();    // from wagmi => address, connected, gas etc.
  const [alchemy, setAlchemy] = useState();
  const [nfts, setNfts] = useState(null);
  // const [attributes, setAttributes] = useState();

  // Alchemy settings from the docs of sdk.
  useEffect(()=>{
    const settings = {
      apiKey: "zoZR88ybkJbA8DtyfxId-VJQlrJm2D6U", // Replace with your Alchemy API Key.
      network: Network.ETH_GOERLI, // Replace with your network.
    };
    const alchemy = new Alchemy(settings);
    // console.log(alchemy);
    setAlchemy(alchemy);
  },[])

  // function if true fetch our whole nft's.
  useEffect(() => {
    if(address && isConnected && alchemy){
      fetchNFTs(address); // passing address to fetch all nft's
    }
  },[address,isConnected,alchemy]);
  
  async function fetchNFTs(address){
    let ownerNfts = await alchemy.nft.getNftsForOwner(address);
    let res = await (ownerNfts.ownedNfts);

    for(let i=0; i<res.length; i++){
      const metadata =await axios(res[i].tokenUri.raw);
      // console.log("metadata",metadata)
      res[i].metadata = metadata.data;
      let newres = res[i].metadata
      setNfts(newres);
    }
    // console.log("res", res)

  }

  return (
    <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains}>
      <YourComponent />
      {address && isConnected && alchemy? <NFTbox nfts={nfts}/> : <h3>Please Connect the wallet</h3>}
    </RainbowKitProvider>
  </WagmiConfig>
  );
}

export default App