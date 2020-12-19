
function balancedBraces(...args) {
  if (typeof args[0] !== 'string')
    throw new Error("Provide a string")
  const braceHolder = []
  for (let i = 0; i < args[0].length; i++) {
    let character = args[0].charAt(i)
    if (character === "{" || character === "[" || character === "(") {
      braceHolder.push(character)
    }
    else if (character === "}" || character === "]" || character === ")") {
      switch (character) {
        case "}":
          if (braceHolder[braceHolder.length - 1] === "{")
            braceHolder.pop()
          else
            return false
          break
        case ")":
          if (braceHolder[braceHolder.length - 1] === "(")
            braceHolder.pop()
          else
            return false
          break
        case "]":
          if (braceHolder[braceHolder.length - 1] === "[")
            braceHolder.pop()
          else
            return false
          break
      }
    }
  }
  return braceHolder.length === 0;
}

export {
  balancedBraces,
};
