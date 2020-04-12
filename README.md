# Winning-Lottery-Ticket
## Get the number of winning pairs - Javascript Algorithm
Please go to this page if you want to finish this algorithm. [https://www.hackerrank.com/challenges/winning-lottery-ticket/problem](https://www.hackerrank.com/challenges/winning-lottery-ticket/problem)


The SuperBowl Lottery is about to commence, and there are several lottery tickets being sold, and each ticket is identified with a ticket ID. In one of the many winning scenarios in the Superbowl lottery, a winning pair of tickets is:

- Concatenation of the two ticket IDs in the pair, in any order, contains each digit from 0 to 9 at least once.
For example, if there are 2 distinct tickets with ticket ID 129300455 and 56789, (129300455, 56789) is a winning pair.

NOTE: The ticket IDs can be concantenated in any order. Digits in the ticket ID can occur in any order.

Your task is to find the number of winning pairs of distinct tickets, such that concatenation of their ticket IDs (in any order) makes for a winning scenario. Complete the function `winningLotteryTicket` which takes a string array of ticket IDs as input, and return the number of winning pairs.

**Input Format**

The first line contains  denoting the total number of lottery tickets in the super bowl.
Each of the next  lines contains a string, where string on a *i*th line denotes the ticket id of the *i*th ticket.

**Constraints**

- 1 ≤ n ≤ 10^6 (pow(10, 6))
1 ≤ length of ticket_i ≤ 10^6  
sum of lengths of all 
Each ticket id consists of digits from [0,9] 

**Output Format**

Print the number of pairs in a new line.

**Sample Input 0**

5
129300455 
5559948277
012334556 
56789
123456879

**Sample Output 0**

5

**Explanation 0**

Pairs of distinct tickets that make for a winning scenario are :

Ticket ID 1 | Ticket ID 2 | Winning Pair
—————————————————————————————————————————————————

129300455   | 56789       | (129300455, 56789)

—————————————————————————————————————————————————

129300455   | 123456789   | (129300455, 123456789)

—————————————————————————————————————————————————

5559948277  | 012334556   | (5559948277, 012334556)

—————————————————————————————————————————————————

012334556   | 56789       | (012334556, 56789)

—————————————————————————————————————————————————

012334556   | 123456789   | (012334556, 123456879) 

—————————————————————————————————————————————————


Notice that each winning pair has digits from 0 to 9 atleast once, and the digits in the ticket ID can be of any order. Thus, the number of winning pairs is 5.
