import { Actor, HttpAgent } from "@dfinity/agent";
import idlFactory from "../idl/dogmi.did";

const canisterId = "7tx3o-zyaaa-aaaak-aes6q-cai";

// Adjust the host to always point to the IC mainnet
const agent = new HttpAgent({
  host: "https://ic0.app",
});

// Fetch the root key for the IC mainnet - this is necessary for development environments
agent.fetchRootKey().catch((err) => {
  console.warn(
    "Unable to fetch root key for IC mainnet. Ensure your network connection to the IC is stable.",
  );
  console.error(err);
});

export const tokenActor = Actor.createActor(idlFactory, {
  agent,
  canisterId,
});
