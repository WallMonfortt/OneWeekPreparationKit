function truckTourDemo (petrolpumps) {
    let begin = 0;
    let finish = 1;
    let petrolLong = petrolpumps.length;
    let currentPetrol = petrolpumps[begin][0] - petrolpumps[begin][1];
    while (begin !== finish || currentPetrol < 0) {
        console.log(`Begin: ${begin}, Finish: ${finish}, CurrentPetrol: ${currentPetrol}`);
        while (currentPetrol < 0 && begin !== finish) {
            currentPetrol -= petrolpumps[begin][0] - petrolpumps[begin][1];
            begin = (begin + 1) % petrolLong;
            console.log(`Begin: ${begin}, Finish: ${finish}, CurrentPetrol: ${currentPetrol}`);
            if (begin === 0) {
                return -1;
            }
        }
        currentPetrol += petrolpumps[finish][0] - petrolpumps[finish][1];
        finish = (finish + 1) % petrolLong;
    }
console.log(`Answer: ${begin}`)
return begin;
}

truckTourDemo([[1, 5], [10, 3], [3, 4]]); // 1
truckTourDemo([[2, 2], [3, 4], [5, 1]]); // 2
truckTourDemo([[4, 6], [6, 5], [7, 3], [4, 5]]); // 1