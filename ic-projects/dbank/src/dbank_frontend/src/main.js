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
    // const currentAmount = await dbank_backend.checkBalance();
    // document.getElementById("value").innerText = Math.round(currentAmount * 100)/100
    await update()
    console.log("Finished Loading.")
})

document.querySelector("form").addEventListener("submit", async function (event) {
    event.preventDefault();
    // console.log('Submited');

    const button = event.target.querySelector('#submit-btn')

    const inputAmount = parseFloat(document.getElementById('input-amount').value);
    console.log(inputAmount)
    const outputAmount = parseFloat(document.getElementById('withdrawal-amount').value);
    console.log(outputAmount)

    // Disable button
    button.setAttribute('disabled', true);

    // TopUp the amount
    if (document.getElementById('input-amount').value.length != 0) {
        await dbank_backend.topUp(inputAmount);
    }
    

    // Withdraw the amount
    if (document.getElementById('withdrawal-amount').value.length != 0) {
        await dbank_backend.withdraw(outputAmount)
    }

    await dbank_backend.compound()

    // Refresh the balance
    // const currentAmount = await dbank_backend.checkBalance();
    // document.getElementById("value").innerText = Math.round(currentAmount * 100)/100
    await update()
    console.log("Finished Refreshing.")

    button.removeAttribute('disabled')
    document.getElementById('input-amount').value = ''
    console.log("Input set to ''")
    document.getElementById('withdrawal-amount').value = ''
    console.log("Input set to ''")

})

async function update() {
    const currentAmount = await dbank_backend.checkBalance();
    document.getElementById("value").innerText = Math.round(currentAmount * 100)/100
    console.log("Current balance: " + Math.round(currentAmount * 100)/100)
}