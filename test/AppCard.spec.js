import { describe, expect } from '@jest/globals'
import AppCard from '@/components/AppCard.vue'

describe('AppCard', () => {
  // props
  describe('props()', () => {
    test('props default value', () => {
      // Arrange

      // Act
      const defVal = AppCard.props.cards.default.call()

      // Assert
      expect(defVal).toEqual([])
    })
  })

  // data
  describe('data()', () => {
    test('data default value', () => {
      // Arrange
      const expected = {
        slide: 0,
        showCardNumber: false
      }
      // Act
      const defObj = AppCard.data.call()

      // Assert
      expect(defObj).toEqual(expected)
    })
  })

  // computed
  describe('validCard()', () => {
    test('validCard false case', () => {
      // Arrange
      const localThis = {
        getActiveCard: null
      }
      const expected = false
      // Act
      const card = AppCard.computed.validCard.call(localThis)

      // Assert
      expect(card).toEqual(expected)
    })

    test('validCard true case', () => {
      // Arrange
      const localThis = {
        getActiveCard: {
          name: 'test'
        }
      }
      const expected = true
      // Act
      const card = AppCard.computed.validCard.call(localThis)

      // Assert
      expect(card).toEqual(expected)
    })
  })

  describe('getActiveCard()', () => {
    test('getActiveCard', () => {
      // Arrange
      const localThis = {
        cards: [
          {
            name: 'test'
          }
        ],
        slide: 0
      }
      const expected = {
        name: 'test'
      }
      // Act
      const card = AppCard.computed.getActiveCard.call(localThis)

      // Assert
      expect(card).toEqual(expected)
    })

    test('getActiveCard not existing index', () => {
      // Arrange
      const localThis = {
        cards: [
          {
            name: 'test'
          }
        ],
        slide: 1
      }
      const expected = null

      // Act
      const card = AppCard.computed.getActiveCard.call(localThis)

      // Assert
      expect(card).toEqual(expected)
    })
  })


  describe('activeCardState()', () => {
    test('activeCardState false case', () => {
      // Arrange
      const localThis = {
        getActiveCard: null
      }
      const expected = false

      // Act
      const frozen = AppCard.computed.activeCardState.call(localThis)

      // Assert
      expect(frozen).toEqual(expected)
    })

    test('activeCardState false not active card', () => {
      // Arrange
      const localThis = {
        getActiveCard: {
          frozen: undefined
        }
      }
      const expected = false

      // Act
      const frozen = AppCard.computed.activeCardState.call(localThis)

      // Assert
      expect(frozen).toEqual(expected)
    })

    test('activeCardState true case', () => {
      // Arrange
      const localThis = {
        getActiveCard: {
          frozen: false
        }
      }
      const expected = false

      // Act
      const frozen = AppCard.computed.activeCardState.call(localThis)

      // Assert
      expect(frozen).toEqual(expected)
    })
  })

  // methods
  describe('showCard()', () => {
    test('showCard show case', () => {
      // Arrange
      const localThis = {
        showCardNumber: false
      }
      const expected = true

      // Act
      AppCard.methods.showCard.call(localThis)

      // Assert
      expect(localThis.showCardNumber).toEqual(expected)
    })

    test('showCard hide case', () => {
      // Arrange
      const localThis = {
        showCardNumber: true
      }
      const expected = false

      // Act
      AppCard.methods.showCard.call(localThis)

      // Assert
      expect(localThis.showCardNumber).toEqual(expected)
    })
  })
})