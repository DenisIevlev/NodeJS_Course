module.exports.password = function (str) {
    str = str.trim();
    let uniqStringSize = new Set(str).size;
    if (str.length > 8 && uniqStringSize == str.length) {
    return true;
    }
    return false;
}