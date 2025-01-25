module.exports = function (arr) {
    if (arr.length) return Math.max(...arr);
    else throw new Error('You must put something into the array');
}