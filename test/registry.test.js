var Registry = artifacts.require('Registry')
let catchRevert = require("./exceptionsHelpers.js").catchRevert
const BN = web3.utils.BN

contract('Registry', function(accounts) {

    const deployAccount = accounts[0]
    const firstAccount = accounts[3]

    let instance

    beforeEach(async () => {
        instance = await Registry.new()
    })

    describe("Functions", () => {
        describe("claim(uint itemId)", async() =>{
            it("claiming an item should emit an event with the provided item details", async() => {
                const tx = await instance.claim(1, {from: deployAccount} )
                const itemData = tx.logs[0].args

                assert.equal(itemData.itemId, 1, "the claimed item ids should match")
            })
            it("claiming an item should emit an event with the correct address", async() => {
                const tx = await instance.claim(2, {from: deployAccount} )
                const itemData = tx.logs[0].args

                assert.equal(itemData.guest, deployAccount, "the claiming address should match")
            })
        })

    })

})
