import React from 'react'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
// import { publicProvider } from 'wagmi/providers/public';
import { YourComponent } from './Components/YourComponent';


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

  return (
    <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains}>
      <YourComponent />
    </RainbowKitProvider>
  </WagmiConfig>
  );
}

export default App