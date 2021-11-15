import { ChainId, DAppProvider } from '@usedapp/core';
import { ReactNode } from 'react';

const config = {
  readOnlyChainId: ChainId.Mumbai,
  readOnlyUrls: {
    [ChainId.Mumbai]: process.env.REACT_APP_POLYGON_CHAIN_URL
  }
};

interface AppProviderProps {
  children: ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  // @ts-ignore
  return <DAppProvider config={config} children={children} />;
}
