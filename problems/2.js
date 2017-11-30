const { ListNode } = global;

const addTwoNumbers = (l1, l2, shouldAdd) => {
  const ll1 = l1 || new ListNode(0);
  const ll2 = l2 || new ListNode(0);
  const value = ll1.val + ll2.val + (shouldAdd ? 1 : 0);
  const nextShouldAdd = value > 9;
  const result = new ListNode(value % 10);
  if (ll1.next || ll2.next || nextShouldAdd) {
    result.next = addTwoNumbers(ll1.next, ll2.next, nextShouldAdd);
  }
  return result;
};
