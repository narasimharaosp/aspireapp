import { describe, expect } from '@jest/globals'
import CardDetails from '@/components/CardDetails.vue'

describe('CardDetails', () => {
  // data
  describe('data()', () => {
    test('data', () => {
      // Arrange
      const expected = {
        visible: false,
        visible2: false
      }
      // Act
      const defVal = CardDetails.data.call()
      // Assert
      expect(defVal).toEqual(expected)
    })
  })

  // props
  describe('props()', () => {
    test('props cardIndex', () => {
      // Arrange
      const expected = 0
      // Act
      const defVal = CardDetails.props.cardIndex.default()
      // Assert
      expect(defVal).toEqual(expected)
    })
    test('props card', () => {
      // Arrange
      const expected = null
      // Act
      const defVal = CardDetails.props.card.default()
      // Assert
      expect(defVal).toEqual(expected)
    })
  })
})
