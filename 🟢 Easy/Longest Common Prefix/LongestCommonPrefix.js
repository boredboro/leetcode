const longestCommonPrefix = (strs) => {
    if (!strs.length) return "";

    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        for (let str of strs) {
            if (str[i] !== char) return strs[0].slice(0, i);
        }
    }

    return strs[0];
};

const findPrefixHorizontal = (strs) => {
    if (!strs.length) return "";

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
            if (!prefix) return "";
        }
    }

    return prefix;
};

const findPrefixBinary = (strs) => {
    if (!strs.length) return "";

    const isCommonPrefix = (length) => {
        const prefix = strs[0].slice(0, length);
        return strs.every((str) => str.startsWith(prefix));
    };

    let low = 0;
    let high = Math.min(...strs.map((str) => str.length));

    while (low < high) {
        const mid = Math.floor((low + high + 1) / 2);
        if (isCommonPrefix(mid)) {
            low = mid;
        } else {
            high = mid - 1;
        }
    }

    return strs[0].slice(0, low);
};