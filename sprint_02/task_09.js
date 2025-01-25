module.exports = function (s) {
    let extension = ['gif', 'png', 'jpg', 'jpeg'];
    return extension.some(item => s.includes(item)) ? 'image' : false;
}
