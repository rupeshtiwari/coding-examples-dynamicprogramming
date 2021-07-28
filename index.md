# Dynamic Programming Learning

Dynamic programming (DP) is about finding some work that is repeating multiple time un-necessary. So you save the result of that sub-problem and reuse multiple times to avoid extra computation.

![](https://i.imgur.com/9qd3cgU.png)

## Types of Dynamic Programming

Normally, 3 types of problems can be solved by DP.

![](https://i.imgur.com/NAdXeuD.png)

### 1- Count something, often the number of ways

Examples:

- Number of ways to re-arrange elements in a sequence that satisfies some condition.
- Number of paths from one vertex to other.

### 2- Minimize or Maximize certain value.

### 3- YES/NO questions.

Given a set of numbers check if there is sub-set with the sum of elements equal to the given target value.

2nd and 3rd types problems can be solved by Greedy approach also. Therefore, DP can be greedy like `Kaden's algorithm`.

## Iterative vs Recursion for DP

| Iteration                                                                                                                | Recursion                     |
| ------------------------------------------------------------------------------------------------------------------------ | ----------------------------- |
| Speed                                                                                                                    | Easy to apply                 |
| Shorter code                                                                                                             | Fewer States                  |
| **Easier complexity**: Easy to get time and space complexity of program                                                  | Order of state doesn't matter |
| **Harder techniques**: In hard problems, iteration allows us the harder techniques like `Prefix-Sum` and `Segment Trees` |                               |

## In DP should I use recursive or iterative approach?

Because iterative approach allow us to apply harder techniques and gives less time complexity ever. I would recommend using iterative approach while solving problems using DP.

## When I need Dynamic Programming?

Whenever you find repetitive computation in your sub-problems then apply DP.

Examples:

- **Calculate Fibonacci**: We end up computing duplicate numbers. So we should apply DP and optimize our solution.

![](https://i.imgur.com/T24uh0t.png)

- **Calculate Factorial**: We do not repeat any calculation. Therefore, DP is not applied here.

![](https://i.imgur.com/NehtYBP.png)

## How to approach Dynamic Programming?

In DP you need to define the **state** and the **state transition** of the result at any given position/time.

There are 3 varieties of states in DP described as below:

- If question is asking the **number of way**s person arrive to the given position. Then in DP you store number to indicate the ways/choices at given positions. `DP[i] = number`
- If question is asking can person arrive or **is it possible** (YES/NO) to arrive to the given position. Then in DP you store Boolean value to indicate yes or no at given position. `DP[i] = true|false`
- If question is asking to maximize the possibility to the given position. Then in DP you store maximum value at any position. `DP[i] = maximumValue at position i.`

## Tips to remember while approaching DP

At any position think 🤔 what is important so far.

- Is the number of jumps
- May be last jump is important because you are forbidden to make 2 consecutive jumps.

## Dynamic Programming Problems

### Example of DP: You are climbing a staircase. It takes N steps to reach to the top. How many distinct ways a person can arrive to the top? Each time you can either climb 1 or 2 steps

![](https://i.imgur.com/lPId0Tg.png)

In this example the state is number and the transition is `dp[i]=dp[i-1]+dp[i-2]`. This is same as Fibonacci series question.

![](https://i.imgur.com/KM9KJi2.png)

![](https://i.imgur.com/qTJzOpf.png)

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1700383344966810"
     crossorigin="anonymous"></script>

### Problem of DP: You are climbing a staircase. It takes N steps to reach to the top. Each time you can either climb 1 or 2 steps. How many distinct ways a person can arrive to the the top at most `k` jumps?

**What is the state?**

State is described as position and the number of jumps required to arrive that position.

`state = dp[i][k];`

**What is the state transition?**

![](https://i.imgur.com/ajBg7h2.png)

Answer will be the sum over DP of n and the j the number of jumps over j from `0` up to `k`. Because you are allowed to make at most k jumps.

**What is Space Complexity?**

`O(N*K)`

**What is time complexity?**

`O(1)` constant time.

![](https://i.imgur.com/MiKxMfk.png)

### Given a grid, find a path from the top-left to the bottom-right corner that minimizes the sum of numbers along the path. You can only move right or down.

![](https://i.imgur.com/Ku4xVmY.png)

In this question Greedy approach will not work. So We have to go by DP.

### Given the target value N and an array of allowed numbers, count ways to write N as the sum of those numbers.

|  Algorithm | Simulation  |
|---|---|
| ![](https://i.imgur.com/PCR204n.png)  | ![](https://i.imgur.com/e6ynzhx.png)  |





