let addresses = require(`/Users/zandent/Files/conflux_proj/swappi-v2/swappi-deploy/contractAddressPublicTestnet.json`);
async function main() {
    console.log(`Verifying contract on Etherscan...`);
    try {
        await hre.run(`verify:verify`, {
            address: addresses.UniswapV3NFTDescriptor,
            constructorArguments: []
    });
    console.log(`Done for UniswapV3NFTDescriptor`);
    } catch (error) {}
    try {
        await hre.run(`verify:verify`, {
            address: addresses.NonfungibleTokenPositionDescriptor,
            constructorArguments: [addresses.WCFX],
            libraries: {
                NFTDescriptor: addresses.NFTDescriptor,
            }
    });
    } catch (error) {}
    console.log(`Done for NonfungibleTokenPositionDescriptor`);
    try {
        await hre.run(`verify:verify`, {
            address: addresses.NonfungiblePositionManager,
            constructorArguments: [addresses.UniswapV3Factory, addresses.WCFX, addresses.UniswapV3NonfungibleTokenPositionDescriptor],
        });
    } catch (error) {}
    console.log(`Done for NonfungiblePositionManager`);
    try {
        await hre.run(`verify:verify`, {
            address: addresses.UniswapV3SwapRouter,
            constructorArguments: [addresses.UniswapV3Factory, addresses.WCFX],
        });
    } catch (error) {}
    console.log(`Done for UniswapV3SwapRouter`);
    try {
        await hre.run(`verify:verify`, {
            address: addresses.UniswapV3Quoter,
            constructorArguments: [addresses.UniswapV3Factory, addresses.WCFX],
        });
    } catch (error) {}
    console.log(`Done for UniswapV3Quoter`);
    try {
        await hre.run(`verify:verify`, {
            address: addresses.UniswapV3QuoterV2,
            constructorArguments: [addresses.UniswapV3Factory, addresses.WCFX],
        });
    } catch (error) {}
    console.log(`Done for UniswapV3QuoterV2`);
    try {
        await hre.run(`verify:verify`, {
            address: addresses.UniswapInterfaceMulticall,
        });
    } catch (error) {}
    console.log(`Done for UniswapInterfaceMulticall`);
    try {
        await hre.run(`verify:verify`, {
            address: addresses.UniswapV3TickLens,
        });
    } catch (error) {}
    console.log(`Done for UniswapV3TickLens`);
    
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});