function timeConversion(s: string): string {
    // Write your code here
    let hour = s.slice(0, 2);
    let min = s.slice(3, 5);
    let sec = s.slice(6, 8);
    let ampm = s.slice(8, 10);
    let newHour = 0;
    let newTime = '';
    if (ampm === 'PM') {
        if (hour === '12') {
            newHour = parseInt(hour);
        } else {
            newHour = parseInt(hour) + 12;
        }
    } else {
        if (hour === '12') {
            newHour = 0;
        } else {
            newHour = parseInt(hour);
        }
    }
    if (newHour < 10) {
        newTime = '0' + newHour + ':' + min + ':' + sec;
    } else {
        newTime = newHour + ':' + min + ':' + sec;
    }
    return newTime;

}

timeConversion('07:05:45PM');