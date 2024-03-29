import dynamic from 'next/dynamic';
import Link from 'next/link';

const WormholeBridge = dynamic(
  () => import('@wormhole-foundation/wormhole-connect'),
  {
    ssr: false,
  }
);
export default function App() {
  return (
    <div className="App">
      <Link href="/">Home</Link>
      <Link href="/another">Another page</Link>
      <WormholeBridge
        config={{
          env: 'mainnet',
          mode: 'dark',
          routes: ['bridge', 'relay', 'cosmosGateway', 'tbtc', 'cctpManual'],
          bridgeDefaults: {
            toNetwork: 'solana',
            fromNetwork: 'ethereum',
            token: 'USDCeth',
          },
          networks: ['ethereum', 'solana'],
          tokens: ['USDCeth', 'USDCsol'],
          showHamburgerMenu: false,
          rpcs: {
            solana:
              'https://mercurial.rpcpool.com/73517088-76ac-463a-aca4-b95717cb46d2',
          },
        }}
      />
    </div>
  );
}
