import { canisterId, createActor } from "../../declarations/dbank_backend";
import { HttpAgent } from "@icp-sdk/core/agent";

let dbank_backend;

async function initActor() {
    const agent = new HttpAgent({ host: `http://${window.location.hostname}:4943` });
    await agent.fetchRootKey();
    dbank_backend = createActor(canisterId, { agent });
}

window.addEventListener('load', async function() {
    await initActor();
    const currentAmount = await dbank_backend.checkBalance();
    document.getElementById("value").innerText = Math.round(currentAmount * 100)/100
    console.log("Finished Loading. Value is now " + currentAmount)
})

document.querySelector("form").addEventListener("submit", async function (event) {
    event.preventDefault();
    // console.log('Submited');

    const inputAmount = parseFloat(document.getElementById('input-amount').value);
    console.log(inputAmount)
    const outputAmount = parseFloat(document.getElementById('withdrawal-amount').value);
    // console.log(outputAmount)

    // TopUp the amount 
    await dbank_backend.topUp(inputAmount);

    // Withdraw the amount
    // await dbank_backend.withdraw(outputAmount)

    // Refresh the balance
    const currentAmount = await dbank_backend.checkBalance();
    document.getElementById("value").innerText = Math.round(currentAmount * 100)/100


})