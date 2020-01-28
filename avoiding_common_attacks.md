# Avoiding Common Attacks

## Denial of Service by Block Gas Limit (startGas)
If a smart contract reaches a state where a transaction requires more than 10,000,000 gas to execute, the transaction
will never fully execute since it reaches the block gas limit before finishing. This becomes possible if a contract
loops over an array of undetermined size. Since this is a simple contract and the array of guests is limited to 16
and items are also limited to 16, there is no array of undetermined size and therefore will not reach the gas limit.
This may change in the future if the dapp is extended to accommodate more guests or more items, however the average wedding
guest list is less than about 150, so it would still make sense to limit array size to something reasonable that would still
never hit the gas limit.

## Re-entrancy Attacks
There is no risk of re-entrancy because of the simplicity of the contract. In future extensions, re-entrancy attacks can be
avoided by using the withdrawal design pattern, through the use of OpenZeppelin's [PullPayment.sol](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/payment/PullPayment.sol)
contract. OpenZeppelin's contracts have been battle tested. I would also generally ensure that internal contract state changes
are handled before calling external contracts.

## Denial of Service
This problem is also not applicable to this simple case, but avoidable in future extensions by using the withdrawal pattern,
which would be implemented using OpenZeppelin's [PullPayment.sol](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/payment/PullPayment.sol)
contract.

