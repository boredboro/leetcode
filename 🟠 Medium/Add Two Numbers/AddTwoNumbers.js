const addTwoNumbers = (l1, l2) => {
    let dummyHead = { val: 0, next: null };

    let p = l1,
        q = l2,
        current = dummyHead;

    let carry = 0;

    while (p !== null || q !== null || carry > 0) {
        let x = p ? p.val : 0;
        let y = q ? q.val : 0;
        let sum = carry + x + y;

        carry = Math.floor(sum / 10);
        current.next = { val: sum % 10, next: null };
        current = current.next;

        if (p) p = p.next;
        if (q) q = q.next;
    }

    return dummyHead.next;
};

const addLinkedLists = (l1, l2) => {
    let dummyHead = { val: 0, next: null };

    let p = l1,
        q = l2,
        current = dummyHead;

    let carry = 0;

    while (p || q || carry) {
        let sum = carry;

        if (p) {
            sum += p.val;
            p = p.next;
        }

        if (q) {
            sum += q.val;
            q = q.next;
        }

        carry = Math.floor(sum / 10);
        current.next = { val: sum % 10, next: null };
        current = current.next;
    }

    return dummyHead.next;
};

const addTwoNumbersRecursive = (l1, l2, carry = 0) => {
    if (!l1 && !l2 && !carry) return null;

    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + carry;

    return {
        val: sum % 10,
        next: addTwoNumbers(
            l1 ? l1.next : null,
            l2 ? l2.next : null,
            Math.floor(sum / 10)
        ),
    };
};