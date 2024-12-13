const romanToInt = (s) => {
    const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        const current = map[s[i]];
        const next = map[s[i + 1]] || 0;
        total += current < next ? -current : current;
    }

    return total;
};

const romanToIntegerReduce = (s) => {
    const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

    return s.split("").reduce((total, curr, i, arr) => {
        const current = map[curr];
        const next = map[arr[i + 1]] || 0;
        return total + (current < next ? -current : current);
    }, 0);
};

const romanToIntegerWhile = (s) => {
    const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let total = 0,
        i = 0;
    while (i < s.length) {
        const current = map[s[i]];
        const next = map[s[i + 1]] || 0;
        total += current < next ? next - current : current;
        i += current < next ? 2 : 1;
    }
    return total;
};