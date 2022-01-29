import { describe, expect } from '@jest/globals'
import NewCard from '@/components/NewCard.vue'
import jestConfig from '~/jest.config'

describe('NewCard', () => {
  // data
  describe('data()', () => {
    test('data', () => {
      const expected = {
        name: '',
        submitted: false
      }
      expect(NewCard.data.call()).toEqual(expected)
    })
  })

  // computed
  describe('randomDate()', () => {
    test('randomDate', () => {
      // Arrange
      const expected = 5
      // Act
      const rMY = NewCard.computed.randomDate.call()
      // Assert
      expect(rMY.length).toEqual(expected)
    })
  })

  // methods
  describe('resetModal()', () => {
    test('resetModal', () => {
      // Arrange
      const localThis = {
        name: 'test'
      }
      const expected = ''
      // Act
      NewCard.methods.resetModal.call(localThis)
      // Assert
      expect(localThis.name).toEqual(expected)
    })
  })

  describe('handleOk()', () => {
    test('handleOk', () => {
      // Arrange
      const localThis = {
        handleSubmit: jest.fn()
      }
      const modal = {
        preventDefault: jest.fn()
      }
      // Act
      NewCard.methods.handleOk.call(localThis, modal)
      // Assert
      expect(localThis.handleSubmit).toHaveBeenCalled()
      expect(modal.preventDefault).toHaveBeenCalled()
    })
  })
  describe('handleSubmit()', () => {
    test('handleSubmit', () => {
      // Arrange
      let count = 0
      const localThis = {
        submitted: false,
        randomDate: '12/23',
        name: 'test',
        getRandomNumber: (num) => {
          return '1231456713334555'
        },
        $v: {
          $touch: () => {},
          $invalid: false
        },
        $store: {
          commit: () => {
            count++
          }
        },
        $nextTick: ()=> {},
        $bvModal: {
          hide: jest.fn()
        }
      }
      const expected = 1
      // Act
      NewCard.methods.handleSubmit.call(localThis)
      // Assert
      expect(count).toEqual(expected)
    })

    test('handleSubmit', () => {
      // Arrange
      let count = 0
      const localThis = {
        submitted: false,
        randomDate: '12/23',
        name: 'test',
        getRandomNumber: (num) => {
          return '1231456713334555'
        },
        $v: {
          $touch: () => {},
          $invalid: true
        },
        $store: {
          commit: () => {
            count++
          }
        },
        $nextTick: () => {},
        $bvModal: {
          hide: jest.fn()
        }
      }
      const expected = 0
      // Act
      NewCard.methods.handleSubmit.call(localThis)
      // Assert
      expect(count).toEqual(expected)
    })
  })
  
  describe('getRandomNumber()', () => {
    test('getRandomNumber', () => {
      // Arrange
      const localThis = {}
      const expected = 5
      // Act
      const rnd = NewCard.methods.getRandomNumber.call(localThis, 5)
      // Assert
      expect(rnd.length).toEqual(expected)
    })
  })
})