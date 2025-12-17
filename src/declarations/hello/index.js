import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from './hello.did.js';
export { idlFactory } from './hello.did.js';

// CANISTER_ID is replaced by webpack based on node environment
export const canisterId = process.env.HELLO_CANISTER_ID;

export const createActor = (canisterId, options) => {
  const agent = new HttpAgent({
    host: process.env.NODE_ENV === "production" ? undefined : "http://127.0.0.1:35889", // <-- local replica port
    ...options?.agentOptions,
  });

  if (process.env.NODE_ENV !== "production") {
    agent.fetchRootKey().catch(err => {
      console.warn("Unable to fetch root key. Ensure your local replica is running");
      console.error(err);
    });
  }

  return Actor.createActor(idlFactory, {
    agent,
    canisterId,
    ...options?.actorOptions,
  });
};

export const hello = createActor(canisterId);
