import { ethers } from "hardhat";
import chai from "chai";
import { solidity } from "ethereum-waffle";
chai.use(solidity);
import { expect } from "chai";
import { constants } from "buffer";
describe("Blocklist", function () {
  it("it should add and return blocklist if authorized", async function () {
    const [_, addr1] = await ethers.getSigners();
    const contract = await ethers.getContractFactory("Blocklist");
    const Blocklist = await contract.deploy();
    await Blocklist.addHostName("ad.google.com");
    expect(await Blocklist.hostlist(0)).to.equal("ad.google.com");
    await Blocklist.authorizeUser(addr1.address);
    expect(await Blocklist.connect(addr1).addHostName("com.add.abz")).to.emit(Blocklist, "HostNameAdded").withArgs("com.add.abz");
    expect(await Blocklist.hostlist(1)).to.equal("com.add.abz");
  });

  it("it should return all hostlist", async function () {
    const contract = await ethers.getContractFactory("Blocklist");
    const Blocklist = await contract.deploy();
    await Blocklist.addHostName("ad.google.com");
    await Blocklist.addHostName("ad.test.com");
    expect(await Blocklist.getHostList()).to.eql([
      "ad.google.com",
      "ad.test.com",
    ]);
  });

  it("it should fail adding hostname if sender is not authorized", async function () {
    const [_, addr1] = await ethers.getSigners();

    const contract = await ethers.getContractFactory("Blocklist");
    const Blocklist = await contract.deploy().then((c) => c.connect(addr1));
    await expect(Blocklist.addHostName("om.test.com")).to.be.revertedWith(
      "not authorized"
    );
  });

  it("it should fail authorizing user if sender is not owner", async function () {
    const [_, addr1, addr2] = await ethers.getSigners();

    const contract = await ethers.getContractFactory("Blocklist");
    const Blocklist = await contract.deploy().then((c) => c.connect(addr1));
    await expect(Blocklist.authorizeUser(addr2.address)).to.be.revertedWith(
      "sender is not owner"
    );
  });

  it("it should fail if user previously authorized but now it is not authorized", async function () {
    const [_, addr1] = await ethers.getSigners();

    const contract = await ethers.getContractFactory("Blocklist");
    const OwnerBlocklist = await contract.deploy();
    await OwnerBlocklist.authorizeUser(addr1.address);
    const AddrBlocklist = await OwnerBlocklist.connect(addr1);
    await AddrBlocklist.addHostName("ad.google.com");
    await AddrBlocklist.addHostName("ad.test.com");
    expect(await AddrBlocklist.getHostList()).to.eql([
      "ad.google.com",
      "ad.test.com",
    ]);
    await OwnerBlocklist.unAuthorizeUser(addr1.address);
    await expect(AddrBlocklist.addHostName("duck.test.xyz")).to.be.revertedWith(
      "not authorized"
    );
    expect(await AddrBlocklist.getHostList()).to.eql([
      "ad.google.com",
      "ad.test.com",
    ]);
  });
  it("It should remove hostlist pointed by index", async () => {
    const contract = await ethers.getContractFactory("Blocklist");
    const Blocklist = await contract.deploy();
    await Blocklist.addHostName("ad.google.com");
    await Blocklist.addHostName("ad.test.com");
    await Blocklist.addHostName("ad.Duck.com");
    await Blocklist.addHostName("ad.gle.com");
    expect(await Blocklist.removeHostList(2)).to.emit(Blocklist, "HostNameDeleted").withArgs(2);
    expect(await Blocklist.getHostList()).to.eql([
      "ad.google.com",
      "ad.test.com",
      "ad.gle.com",
    ]);
  });

});
