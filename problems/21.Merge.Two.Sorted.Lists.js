// eslint-disable-next-line
const mergeTwoLists = (L1, L2) => {
  let l1 = L1;
  let l2 = L2;
  const result = new ListNode();
  let cursor = result;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      cursor.next = l2;
      l2 = l2.next;
    } else {
      cursor.next = l1;
      l1 = l1.next;
    }
    cursor = cursor.next;
  }
  if (l1) {
    cursor.next = l1;
  } else if (l2) {
    cursor.next = l2;
  }
  return result.next;
};
