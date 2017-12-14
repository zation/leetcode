// eslint-disable-next-line
const swapPairs = (head) => {
  if (!head || !head.next) return head;
  const result = new ListNode();
  result.next = head;
  let previous = result;
  let first = head;
  let second = head.next;
  while (second) {
    first.next = second.next;
    second.next = first;
    previous.next = second;

    previous = second.next;
    first = previous ? previous.next : null;
    second = first ? first.next : null;
  }
  return result.next;
};
