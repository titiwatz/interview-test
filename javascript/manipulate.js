/**
 * 
 * @param {string} text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */
const manipulate = (text) => {
    const results = new Set();

    function permute(arr, memo = []) {
        if (arr.length === 0) {
            results.add(memo.join(''));
        } else {
            for (let i = 0; i < arr.length; i++) {
                const curr = arr.slice();
                const next = curr.splice(i, 1);
                permute(curr.slice(), memo.concat(next));
            }
        }
    }

    permute(text.split(''));
    return Array.from(results).sort();
}

module.exports = {
    manipulate
};