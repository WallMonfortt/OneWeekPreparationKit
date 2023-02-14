

function processData(input) {
    //Enter your code here
    const splitInput = input.split("\n").map(el => el.trim())
    const st1 = []
    const st2 = []
    
    for (let i = 1; i <= splitInput[0]; i++) {
      const [type, x] = splitInput[i].split(" ")
      
      if (type == 1) {
        st1.push(x)
      } else if (type == 2) {
        if (!st2.length) {
          while (st1.length) {
            st2.push(st1.pop())
          }
        }
        
        st2.pop()
      } else {
        console.log(st2.length ? st2[st2.length - 1] : st1[0])
      }
    }
        
} 