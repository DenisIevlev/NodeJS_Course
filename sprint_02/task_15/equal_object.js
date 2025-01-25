module.exports = function (firstObj, secondObj) {
    let firstKeys = Object.keys(firstObj);
    let secondKeys = Object.keys(secondObj);

    if (firstKeys.length !== secondKeys.length) return false;

    for (let key of firstKeys) {
        if (firstObj[key] !== secondObj[key]) return false;
    }
    return true;
}