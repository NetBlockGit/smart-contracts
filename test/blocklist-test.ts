import { expect } from "chai";
import { ethers } from "hardhat";

describe("Blocklist",function(){
    it("it should retrun hostlist", async function(){
    
    const contract = await ethers.getContractFactory("Blocklist")
    const Blocklist = await contract.deploy()
    await Blocklist.addHostName("ad.google.com")
    expect(await Blocklist.hostlist(0)).to.equal("ad.google.com")
})
});