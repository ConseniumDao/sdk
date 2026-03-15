import { useState } from "react";
import { connectWallet } from "../utils/wallet";

export default function Dashboard() {
  const [wallet, setWallet] = useState("");

  async function connect() {
    const address = await connectWallet();
    setWallet(address);
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Consenium Dashboard</h1>

      {!wallet ? (
        <button onClick={connect}>Connect Wallet</button>
      ) : (
        <p>Connected: {wallet}</p>
      )}
    </div>
  );
}
