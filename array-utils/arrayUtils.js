const map = function (func, val) {
  const result = []
  func = func.bind(val)
  for (let i = 0; i < this.length; i++) {
    result.push(func(this[i], i, this))
  }
  return result
}


const filter = function (func, val) {
  const result = []
  func = func.bind(val)
  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this))
      result.push(this[i])
  }
  return result
}


const reduce = function (func, initialValue = 0) {
  let result = initialValue
  for (let i = 0; i < this.length; i++) {
    result = func(result, this[i], i, this)
  }
  return result
}

const forEach = function (func, val) {
  func = func.bind(val)
  for (let i = 0; i < this.length; i++) {
    func(this[i], i, this)
  }
}
export {
  forEach,
  map,
  filter,
  reduce,
}