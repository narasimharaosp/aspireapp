export const state = () => ({
  cards: [
    {
      fullNumber: '1233444455554040',
      lastNumber: '4040',
      type: 'visa',
      name: 'Mark Henry',
      validity: '12/23',
      cvv: '***',
      transactions: [
        {
          id: 1,
          logo: 'FileStorage.svg',
          name: 'Hamleys',
          date: '20 May 2020',
          amount: 150,
          debit: false
        },
        {
          id: 2,
          logo: 'Flights.svg',
          name: 'Hamleys',
          date: '21 May 2020',
          amount: 90,
          debit: true
        },
        {
          id: 3,
          logo: 'Megaphone.svg',
          name: 'Hamleys',
          date: '22 May 2020',
          amount: 123,
          debit: true
        },
        {
          id: 4,
          logo: 'FileStorage.svg',
          name: 'Hamleys',
          date: '23 May 2020',
          amount: 450,
          debit: true
        }
      ]
    },
    {
      fullNumber: 4123500090003322,
      lastNumber: 3322,
      type: 'master',
      name: 'John Doe',
      validity: '12/25',
      cvv: '***',
      transactions: [
        {
          logo: '',
          name: 'Hamleys',
          date: '20 May 2020',
          amount: 150,
          debit: false
        },
        {
          logo: '',
          name: 'Hamleys',
          date: '21 May 2020',
          amount: 90,
          debit: true
        },
        {
          logo: '',
          name: 'Hamleys',
          date: '22 May 2020',
          amount: 123,
          debit: true
        },
        {
          logo: '',
          name: 'Hamleys',
          date: '23 May 2020',
          amount: 450,
          debit: true
        }
      ]
    }
  ]
})

export const mutations = {
  addNewCard: (state, cardName) => {
    const rnd = getRandomNumber(16)
    const last = rnd.slice(rnd.length - 4)
    const newCard = {
      fullNumber: rnd,
      lastNumber: last,
      type: 'visa',
      name: cardName,
      validity: '12/23',
      cvv: '***',
      transactions: []
    }
    state.cards.push(newCard)
  }

}

function getRandomNumber(digit) {
  return Math.random().toFixed(digit).split('.')[1];
}