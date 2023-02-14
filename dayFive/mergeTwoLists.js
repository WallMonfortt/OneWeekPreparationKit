//Given pointers to the heads of two sorted linked lists, merge them into a single, sorted linked list. Either head pointer may be null meaning that the corresponding list is empty.

// Example
// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10
// 1 -> 3 -> 5 -> 7 -> 9
// 2 -> 4 -> 6 -> 8 -> 10
// 1 -> 1 -> 2 -> 3 -> 3 -> 4 -> 5 -> 5 -> 6 -> 7 -> 8 -> 9 -> 9 -> 10

// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function mergeLists(head1, head2) {
    // Write your code here
    let h2Curr  = head2,
    h2Next  = head2.next,
    h1Curr  = head1,
    h1Prev  = null;

  while (h2Curr && h1Curr) {
    if (h1Curr.data >= h2Curr.data) {
      h2Curr.next = h1Curr;

      if (h1Prev) h1Prev.next = h2Curr;

      h1Prev = h2Curr;
      h2Curr = h2Next;

      if (h2Curr) h2Next = h2Curr.next;
    } else {
      h1Prev = h1Curr;
      h1Curr = h1Curr.next;
    }
  }

  if (!h1Curr && h1Prev) h1Prev.next = h2Curr;

  return head2.data <= head1.data ? head2 : head1;

}

