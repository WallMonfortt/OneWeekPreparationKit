// Problem 1

function getFixedCounter(k) {
   let counter = {
        value: 0,
   }
   return {
        increment() {
            counter.value += k;
        },
        decrement() {
            counter.value -= k;
        },
        getValue() {
            return counter.value;
        }
   }
  }


  //Problem 2

  function dataFinder(data) {
    // Write your code here
        return function find(minRange, maxRange, value) {
          if (minRange < 0 || maxRange >= data.length) {
            throw new Error("invalid range");
          }
          for (let i = minRange; i <= maxRange; i++) {
            if (data[i] === value) {
              return true;
            }
          }
          return false;
        };
}