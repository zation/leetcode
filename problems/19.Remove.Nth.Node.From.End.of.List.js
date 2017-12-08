// eslint-disable-next-line
const removeNthFromEnd = (head, n) => {
  const dummy = new ListNode(0);
  dummy.next = head;
  let first = dummy;
  let second = dummy;
  let step = 0;
  while (first.next) {
    first = first.next;
    step += 1;
    if (step > n) {
      second = second.next;
    }
  }
  second.next = second.next.next;
  return dummy.next;
};
