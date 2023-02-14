function isBalanced(s: string): string {
    // Write your code here
    let stack: string[] = [];
    let open = ['(', '[', '{'];
    let close = [')', ']', '}'];
    for (let i = 0; i < s.length; i++) {
        if (open.includes(s[i])) {
            stack.push(s[i]);
        } else {
            let last = stack.pop();
            if (last === undefined) {
                return 'NO';
            } else {
                if (open.indexOf(last) !== close.indexOf(s[i])) {
                    return 'NO';
                }
            }
        }
    }
    if (stack.length > 0) {
        return 'NO';
    }
    return 'YES';
    


}