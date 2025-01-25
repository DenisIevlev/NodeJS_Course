module.exports = function (arr) {
    return arr
    .map(item => (typeof item === 'number' ? item : Number(item) || null))
    .filter(item => item !== null);
}
