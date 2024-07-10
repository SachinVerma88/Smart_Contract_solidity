// contracts/ExampleContract.sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ExampleContract {
    uint public count;

    function increment(uint value) public {
        require(value > 0, "Value must be greater than zero");
        count += value;
    } 

    function decrement(uint value) public {
        if (value > count) {
            revert("Value is greater than the count");
        }
        count -= value;
    }

    function getCount() public view returns (uint) {
        assert(count >= 0);
        return count;
    }
}
