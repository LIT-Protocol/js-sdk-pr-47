import { Inter } from "next/font/google";

import * as WalletConnectProviderPkg from "@walletconnect/ethereum-provider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const go = async () => {
    console.log("WalletConnectProviderPkg:", WalletConnectProviderPkg);
  };
  return (
    <>
      <button onClick={go}>Go</button>
    </>
  );
}
