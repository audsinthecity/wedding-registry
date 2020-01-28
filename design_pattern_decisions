# Design Pattern Decisions

## Circuit Breaker Pattern
An emergency stop is implemented through the OpenZeppelin
[Pausable.sol](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/lifecycle/Pausable.sol)
contract. This is desirable in situations where there is a live contract where a bug has been detected. Freezing could reduce
harm before a fix is implemented.

## Fail Early and Fail Loud
Use ```require``` to check condition required for execution as early as possible to throw an exception if the condition
is not met. Good practice in order to reduce unecessary code execution in the event that an exception is thrown.

## Withdrawal Pattern
Seperation of logic between accounting and withdrawal to protect against the re-entrancy and denial of service attacks
is good practice. This simple version does not actually transfer value so a withdrawal pattern is not needed. However,
in the case it is extended such that a user could actually "buy" a registry item outright by sending value instead
of just claiming an item, I would use the OpenZeppelin [PullPayment.sol](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/payment/PullPayment.sol)
to implement the withdrawal pattern. In the case of an extension where users could split payments to buy certain items,
I would use [PaymentSplitter.sol](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/payment/PaymentSplitter.sol).
