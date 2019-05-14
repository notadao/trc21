const MyTRC21 = artifacts.require('./MyTRC21');
const BigNumber = require('bignumber.js');

const config = require('config');

module.exports = function(deployer) {
    return deployer.deploy(MyTRC21, 'MyTRC21', 'MyTRC21', 18, (new BigNumber(10000000).multipliedBy(1e+18)).toString(10), (new BigNumber(1).multipliedBy(1e+18)).toString(10));
};
