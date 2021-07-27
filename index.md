# Dynamic Programming Learning

Dynamic programming (DP) is about finding some work that is repeating multiple time un-necessary. So you save the result of that sub-problem and reuse multiple times to avoid extra computation.

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

## How to apply DP?

In DP you need to define the state of the result at given time. There are 3 varieties of states in DP described as below:

- If question is asking the **number of way**s person arrive to the given position. Then in DP you store number to indicate the ways/choices at given positions. `DP[i] = number`
- If question is asking can person arrive or **is it possible** (YES/NO) to arrive to the given position. Then in DP you store Boolean value to indicate yes or no at given position. `DP[i] = true|false`
- If question is asking to maximize the possibility to the given position. Then in DP you store maximum value at any position. `DP[i] = maximumValue at position i.`

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1700383344966810"
     crossorigin="anonymous"></script>
