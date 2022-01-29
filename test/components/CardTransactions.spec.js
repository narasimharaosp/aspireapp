import { describe, expect } from '@jest/globals'
import CardTransactions from '@/components/CardTransactions.vue'

describe('CardTransactions', () => {
  // props
  describe('props()', () => {
    test('props', () => {
      expect(CardTransactions.props.transactions.default()).toEqual([])
    })
  })
})