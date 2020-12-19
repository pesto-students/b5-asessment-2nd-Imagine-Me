import { map } from './arrayUtils'
Array.prototype.mymap = map

describe('test for map function', () => {
    test('should return same array', () => {
        expect([1, 2, 3].mymap(v => v)).toEqual(expect.arrayContaining([1, 2, 3]))
    })

    test('should return double the array array', () => {
        expect([1, 2, 3].mymap(v => v * 2)).toEqual(expect.arrayContaining([2, 4, 6]))
    })

})
