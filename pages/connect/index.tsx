import "@rainbow-me/rainbowkit/styles.css";
import {
  ConnectButton,
  getDefaultWallets,
  RainbowKitProvider
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from '@wagmi/chains'
// import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [mainnet, polygon, arbitrum],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

export default function IndexPage() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ConnectButton />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
