/**
 * 
 * @param {string[]} strings list of string [":)", ":(", ":>"]
 * @returns {number} amount of smily face detected
 */
const countSmilyFace = (strings) => {
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

module.exports = {
    countSmilyFace
}