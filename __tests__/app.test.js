import {originalArray, doubleArray, evensOnlyArray} from '../app'

// hint look into before_each before_all


describe('Array its', () => {
  it('should return itself', () => {
    expect([1,2,3,4]).toEqual([1,2,3,4])
  })

  it('should return doubles', () => {
    const result = doubleArray([1,2,3,4])
    expect(result).toEqual([2,4,6,8])
  })

  it('should return evens only', () => {
    expect(evensOnlyArray([1,2,3,4])).toEqual([2,4])
  })

  it('should return sum of the array', () => {
    expect(arraySum([1,2,3,4])).toEqual(10)
  })

  it('should return all numbers greater than 0', () => {
    expect(allNumbersGreaterThanZero([1,2,3,4])).toEqual([1,2,3,4])
  })

  it('should return true if one or more items in array are odd', () => {
    expect(someNumbersAreOdd([1,2,3,4])).toEqual([1,3])
  })
  it('should return the even numbers and double them', () => {
    expect(evensOnlyAndDoubleArray([1,2,3,4])).toEqual([4,8])
  })
  it('should return the number 1', () => {
    expect(findItem([1,2,3,4])).toEqual(1)
  })
  it('should return the array backwards 4,3,2,1', () => {
    expect(sortArray([1,2,3,4])).toEqual([4,3,2,1])
  })


})