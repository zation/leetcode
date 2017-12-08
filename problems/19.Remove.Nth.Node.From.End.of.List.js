// eslint-disable-next-line
const removeNthFromEnd = (head, n) => {
  const list = [head];
  let cursor = head;
  while (cursor.next) {
    list.push(cursor.next);
    cursor = cursor.next;
  }
  if (n > list.length) {
    return head;
  }
  if (n === list.length) {
    return head.next;
  }
  if (n === 1) {
    list[list.length - 2].next = null;
    return head;
  }
  list[list.length - n - 1].next = list[list.length - n + 1];
  return head;
};
