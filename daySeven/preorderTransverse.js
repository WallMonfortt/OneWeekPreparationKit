/*
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function preOrder(root) {
    process.stdout.write((root.data).toString() + " ");
    if (root.left){
        preOrder(root.left);
    }
    if (root.right){
        preOrder(root.right);
    } 
}