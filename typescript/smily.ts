/**
 * 
 * @param texts list of string [":)", ":(", ":>"]
 * @returns amount of smily face detected
 */
export function countSmilyFace(strings: string[]) : number {
    const smileyPattern = /(:[-~]?[)D]|;[-~]?[)D])/g;
    let totalCount = 0;

    strings.forEach(s => {
        const matches = s.match(smileyPattern);
        if (matches) {
            totalCount += matches.length;
        }
    });

    return totalCount;
}