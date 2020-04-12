function winningLotteryTicket(tickets) {
    const masks = [];
    let i = 0, count = 0;
    let mask = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    
    while (tickets.length > 0) {    
        if (tickets[0].includes(`${i}`)) mask[i] = 1; // check if ticket includes i
        if (i == 9) {
            i = 0;
            tickets.shift();
            masks.push(parseInt(mask.join(''), 2));
            mask = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            continue;
        }
        i ++;
    }

    while (masks.length > 1) {
        
        if (masks[0] === 1023) {
            count = count + masks.length - 1;
            masks.shift();
            i = 1;
            continue;
        }
        
        if ((masks[0] | masks[i]) === 1023) count++;
 
        if (i == (masks.length - 1)) {
            i = 1;
            masks.shift();
            continue;
        }
        i++;
        
    }
    
    return count;
}
