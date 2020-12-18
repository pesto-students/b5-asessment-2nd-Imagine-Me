const arrayCubeRootToJson = arr => {
    if (!(arr instanceof Array))
        throw new Error("Provide an array")
    const outputJsonObject = {};
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number' || /^[0-9]+$/.test(new String(arr[i])))
            outputJsonObject[arr[i]] = Math.cbrt(arr[i])
        else
            throw new Error("Not an integer")
    }
    return outputJsonObject
};

module.exports = arrayCubeRootToJson
