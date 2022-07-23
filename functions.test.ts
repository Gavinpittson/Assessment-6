const {shuffleArray} = require('./utils')
const testArray = [1,2,3,4,5]

describe('shuffleArray should', () => {
    // CODE HERE
    
    test('tesing array length', () => {
        expect(shuffleArray(testArray)).toHaveLength(5)
    })
    
    test('return array', () => {
        expect(shuffleArray(testArray)).toEqual(expect.arrayContaining(testArray))
    })

    
})