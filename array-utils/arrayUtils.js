const map = function (func) {
  const result = []
  for (let i = 0; i < this.length; i++) {
    result.push(func(this[i], i, this))
  }
  return result
}
export {
  // forEach,
  map
  // filter,
  // reduce,
}