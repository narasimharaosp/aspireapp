import { describe, expect } from '@jest/globals'
import AppCards from '@/components/AppCards.vue'

describe('AppCards', () => {
  // computed
  describe('getDebitCards()', () => {
    test('getDebitCards empty', () => {
      // Arrange
      const localThis = {
        cards: []
      }
      const expected = []
      // Act
      const cards = AppCards.computed.getDebitCards.call(localThis)
      // Assert
      expect(cards).toEqual(expected)
    })

    test('getDebitCards with data', () => {
      // Arrange
      const localThis = {
        cards: [
          {
            name: 'John',
            fullNumber: 1234123412341234
          }
        ],
        getN: (n) => n
      }
      const expected = [
        {
          exactNum: "1234123412341234",
          name: 'John',
          fullNumber: 1234123412341234
        }
      ]
      // Act
      const cards = AppCards.computed.getDebitCards.call(localThis)
      // Assert
      expect(cards).toEqual(expected)
    })
  })

  // methods
  describe('getN()', () => {
    test('getN valid number', () => {
      // Arrange
      const localThis = {}
      const card = '9234123416346234'
      const expected = ["9234", "1234", "1634", "6234"]
      // Act
      const cards = AppCards.methods.getN.call(localThis, card)
      // Assert
      expect(cards).toEqual(expected)
    })
    test('getN no number', () => {
      // Arrange
      const localThis = {}
      const card = ''
      const expected = ''
      // Act
      const cards = AppCards.methods.getN.call(localThis, card)
      // Assert
      expect(cards).toEqual(expected)
    })
    test('getN string', () => {
      // Arrange
      const localThis = {}
      const card = 'asdajdhsjh'
      const expected = ''
      // Act
      const cards = AppCards.methods.getN.call(localThis, card)
      // Assert
      expect(cards).toEqual(expected)
    })

    test('getN length not 16', () => {
      // Arrange
      const localThis = {}
      const card = 123412341234123
      const expected = ''
      // Act
      const cards = AppCards.methods.getN.call(localThis, card)
      // Assert
      expect(cards).toEqual(expected)
    })
  })
})