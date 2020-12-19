import { map, filter, reduce, forEach } from './arrayUtils'
Array.prototype.myMap = map
Array.prototype.myFilter = filter
Array.prototype.myReduce = reduce
Array.prototype.myForEach = forEach

describe('test for map function', () => {
    test('should return same array', () => {
        expect([1, 2, 3].myMap(v => v)).toEqual(expect.arrayContaining([1, 2, 3]))
    })

    test('should return double the array', () => {
        expect([1, 2, 3].myMap(v => v * 2)).toEqual(expect.arrayContaining([2, 4, 6]))
    })

    test('should return arg', () => {
        expect([1, 2, 3].myMap(function () { return this }, 1)).toEqual(expect.arrayContaining([1, 1, 1]))
    })

})

describe('test for filter function', () => {
    test('should return same array', () => {
        expect([1, 2, 3].myFilter(v => true)).toEqual(expect.arrayContaining([1, 2, 3]))
    })

    test('should return double the array array', () => {
        expect([1, 2, 3].myFilter(v => v % 2 === 0)).toEqual(expect.arrayContaining([2]))
    })

    test('should return [1] arg pass', () => {
        expect([1, 2, 3].myFilter(function (v) { return this === v }, 1)).toEqual(expect.arrayContaining([1]))
    })

})

describe('test for reduce function', () => {
    test('should return sum of array', () => {
        expect([1, 2, 3].myReduce((a, v) => a + v)).toBe(6)
    })

    test('should return sum and initial value is 5', () => {
        expect([1, 2, 3].myReduce((a, v) => v + a, 5)).toBe(11)
    })

})

describe('test for foreach function', () => {
    test('should return sum of array', () => {
        const sumOfArray = () => {
            let accumulator = 0;
            [1, 2, 3].myForEach(v => { accumulator += v })
            return accumulator
        }
        expect(sumOfArray()).toBe(6)
    })
})