const lengthOfLongestSubstring = (s) => {
    let map = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            left = Math.max(map.get(s[right]) + 1, left);
        }
        map.set(s[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

const getMaxLengthOfUniqueSubstring = (s) => {
    let charIndex = {};
    let start = 0;
    let maxLen = 0;

    for (let end = 0; end < s.length; end++) {
        if (charIndex[s[end]] !== undefined) {
            start = Math.max(charIndex[s[end]] + 1, start);
        }
        charIndex[s[end]] = end;
        maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;
};

const longestSubstringWithoutRepeats = (s) => {
    const chars = new Array(128); 
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const index = s.charCodeAt(right);

        if (chars[index] !== undefined && chars[index] >= left) {
            left = chars[index] + 1;
        }

        chars[index] = right;
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

const maxUniqueSubstringLength = (s) => {
    const lastSeenIndex = new Array(128).fill(-1); 
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const charCode = s.charCodeAt(right);

        if (lastSeenIndex[charCode] >= left) {
            left = lastSeenIndex[charCode] + 1;
        }

        lastSeenIndex[charCode] = right;
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};