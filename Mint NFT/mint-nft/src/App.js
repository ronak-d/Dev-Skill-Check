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

  // Alchemy settings from the docs of sdk.
  useEffect(()=>{
    const settings = {
      apiKey: "zoZR88ybkJbA8DtyfxId-VJQlrJm2D6U", // Replace with your Alchemy API Key.
      network: Network.ETH_GOERLI, // Replace with your network.
    };
    const alchemy = new Alchemy(settings);
    console.log(alchemy);
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
    console.log(ownerNfts);
  }

  return (
    <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains}>
      <YourComponent />
    </RainbowKitProvider>
  </WagmiConfig>
  );
}

export default App