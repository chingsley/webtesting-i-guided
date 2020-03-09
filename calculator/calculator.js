module.exports = {
  add
};

function add(x) {
  // console.log(arguments);
  const args = Array.isArray(x) ? x : Array.from(arguments);
  return args.reduce((total, num) => total + num, 0);
}
