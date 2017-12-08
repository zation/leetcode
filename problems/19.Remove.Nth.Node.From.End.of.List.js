// eslint-disable-next-line
const removeNthFromEnd = (head, n) => {
  const dummy = new ListNode(0);
  dummy.next = head;
  let first = dummy;
  let second = dummy;
  for (let i = 0; i < n; i += 1) {
    first = first.next;
  }
  while (first.next) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return dummy.next;
};
