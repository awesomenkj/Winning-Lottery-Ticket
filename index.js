// Maximum size of Array - the number of digits is 10(0 ~ 9), so power(2, 10) is 1024.
const LOOP_LIMIT = 1024;

function winningLotteryTicket(tickets) {
    // (0) ~ (1023), as binary, from 0000000000 - to 1111111111
    let sum = 0;
    let countPerDigitsValue = new Array(LOOP_LIMIT).fill(0);
  
    tickets.forEach((ticket) => {
        let digitsValue = 0;
        for (let i = 0; i < ticket.length; i++) {
          digitsValue |= (1 << (ticket[i] - '0'));
        }
        countPerDigitsValue[digitsValue]++;
     });

  /*
    sumPerDigitsValue[xxxxxxxxxx]:
    Let suppose that xxxxxxxxx equals to 1011000001
    i-th value whether 0 or 1 refers that: in case 1, digit i exists, and in case 0, digit i doesnt exist.
    Therefore, sumPerDigitsValue(1011000001) refers to the count of the tickets that at least have digits 9, 7, 6, and 0.
  */
  let sumPerDigitsValue = new Array(LOOP_LIMIT).fill(0);
  for (let digitsValueI = LOOP_LIMIT - 1; digitsValueI >= 0; digitsValueI--) {
    for (let digitsValueJ = digitsValueI; digitsValueJ < LOOP_LIMIT; digitsValueJ++) {
      if ((digitsValueI & digitsValueJ) != digitsValueI) continue;
      sumPerDigitsValue[digitsValueI] += countPerDigitsValue[digitsValueJ];
    }
  }

  /*
    Calculate a total count of given ticket's winning pairs
  */
  for (let digitValue = 0; digitValue < LOOP_LIMIT; digitValue++) {
    const restDigitsValue = (((1 << 10) - 1) ^ digitValue);
    sum += countPerDigitsValue[digitValue] * sumPerDigitsValue[restDigitsValue];
  }
  console.log('Count = ', (sum - countPerDigitsValue[LOOP_LIMIT - 1]) / 2);
}
