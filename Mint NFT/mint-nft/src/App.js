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
import { publicProvider } from 'wagmi/providers/public';
import ConnectBtn from './Components/ConnectBtn';

function App() {

  const { chains, provider } = configureChains(
    [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum, chain.goerli],
    [
      alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
      publicProvider()
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

  return (
    <div className="App">
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ConnectBtn />
      </RainbowKitProvider>
    </WagmiConfig>
    </div>
  );
}

export default App