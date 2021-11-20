async function main() {
  
  // TODO: plug in the contract address
  const address = "0xdE7b1E2271bf0964ABE26690C2917B2C7810AC39"; 
  // get a contract with the BabyToken ABI and point it at the address 
  const token = await hre.ethers.getContractAt("Zico", address);
  // run the transfer with the arguments you'd like

  const recipient = "0xD4BD0D3971B998AD0f288932f8e357DCCB99D580";

  const amount = ethers.utils.parseEther("27");

  const transfer = await token.transfer(recipient, amount);

  console.log(transfer);

  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
  });