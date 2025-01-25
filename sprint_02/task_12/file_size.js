module.exports = function (n) {
  if(n === 0) return 0;
  else if (n > 0 && n <= 999) return 'b';
  else if (n >= 1000 && n <= 999999) return 'kb';
  else if (n >= 1000000) return 'mb';
}