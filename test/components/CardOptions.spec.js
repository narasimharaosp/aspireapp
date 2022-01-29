import { describe, expect } from '@jest/globals'
import CardOptions from '@/components/CardOptions.vue'

describe('CardOptions', () => {
  // props
  describe('props()', () => {
    test('props', () => {
      expect(CardOptions.props.cardIndex.default()).toEqual(0)
      expect(CardOptions.props.cardName.default()).toEqual('')
      expect(CardOptions.props.cardNumber.default()).toEqual(null)
      expect(CardOptions.props.frozen.default()).toEqual(false)
      expect(CardOptions.props.transactions.default()).toEqual([])
    })
  })

  // methods
  describe('freezeCard()', () => {
    test('freezeCard', () => {
      // Arrange
      let count = 0
      const localThis = {
        cardIndex: 0,
        frozen: false,
        $store: {
          commit: () => {
            count++
          }
        }
      }
      const expected = 1
      // Act
      CardOptions.methods.freezeCard.call(localThis)
      // Assert
      expect(count).toEqual(expected)
    })

    test('freezeCard false case', () => {
      // Arrange
      let count = 0
      const localThis = {
        $store: {
          commit: () => {
            count++
          }
        }
      }
      const expected = 0
      // Act
      CardOptions.methods.freezeCard.call(localThis)
      // Assert
      expect(count).toEqual(expected)
    })
  })

  describe('cancelCard()', () => {
    test('cancelCard', () => {
      // Arrange
      let count = 0
      const localThis = {
        cardIndex: 0,
        $store: {
          commit: () => {
            count++
          }
        }
      }
      const expected = 1
      // Act
      CardOptions.methods.cancelCard.call(localThis)
      // Assert
      expect(count).toEqual(expected)
    })

    test('cancelCard false case', () => {
      // Arrange
      let count = 0
      const localThis = {
        $store: {
          commit: () => {
            count++
          }
        }
      }
      const expected = 0
      // Act
      CardOptions.methods.cancelCard.call(localThis)
      // Assert
      expect(count).toEqual(expected)
    })
  })

  describe('showModal()', () => {
    test('showModal', () => {
      // Arrange
      let count = 0
      const localThis = {
        $refs: {
          'cancel-modal': {
            show: () => {
              count++
            }
          }
        }
      }
      const expected = 1
      // Act
      CardOptions.methods.showModal.call(localThis)
      // Assert
      expect(count).toEqual(expected)
    })
  })
})
