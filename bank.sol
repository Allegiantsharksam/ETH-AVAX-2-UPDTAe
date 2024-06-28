// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Bank {
    int256 private bal;

    event Deposit(address indexed account, int256 amount);
    event Withdrawal(address indexed account, int256 amount);

    constructor() {
        bal = 0;
    }

    function depositMoney(int256 amt) public {
        bal += amt;
        emit Deposit(msg.sender, amt);
    }

    function withdraw(int256 amt) public {
        require(bal >= amt, "Insufficient balance");
        bal -= amt;
        emit Withdrawal(msg.sender, amt);
    }

    function getBalance() public view returns (int256) {
        return bal;
    }
}
