import { expect } from "chai"
import { ethers } from "hardhat"

describe("Blocklist",function(){
    it("it should retrun hostname", async function(){

    
    const contract = await ethers.getContractFactory("Blocklist")
    const Blocklist = await contract.deploy()
    await Blocklist.addHostName("ad.google.com")
    expect(await Blocklist.blocklist(0)).to.equal("ad.google.com")
})
    
});