function truckTour(petrolpumps: number[][]): number {
    // Write your code here
    let begin = 0;
    let finish = 1;
    let petrolLong = petrolpumps.length;
    let currentPetrol = petrolpumps[begin][0] - petrolpumps[begin][1];
    while (begin !== finish || currentPetrol < 0) {
        while (currentPetrol < 0 && begin !== finish) {
            currentPetrol -= petrolpumps[begin][0] - petrolpumps[begin][1];
            begin = (begin + 1) % petrolLong;
            if (begin === 0) {
                return -1;
            }
        }
        currentPetrol += petrolpumps[finish][0] - petrolpumps[finish][1];
        finish = (finish + 1) % petrolLong;
    }
    return begin;
    

}