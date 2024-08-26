/**
 * 
 * @param text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */ 
export function manipulate(text: string) : string[] {
    const results = new Set<string>();

    function permute(arr: string[], memo: string[] = []): void {
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