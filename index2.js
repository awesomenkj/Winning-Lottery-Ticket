function winningLotteryTicket(tickets) {

  let mask;
  let temp = [];
  let count = 0;

  tickets.forEach((ticket, index) => {
    mask = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let j = 0; j < 10; j++) {
      if (ticket.includes(`${j}`)) mask[j] = 1;
    }

    tickets[index] = parseInt(mask.join(''), 2);
  });

  while (tickets.length > 0) {
    temp = tickets.slice(1);

    temp.forEach(item => {
      if ((tickets[0] | item) === 1023) count++;
    });
    tickets.shift();
  }

  return count;
}
