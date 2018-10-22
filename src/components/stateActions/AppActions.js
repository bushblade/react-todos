import uuid from 'uuid'

const updateTitle = (id, title) => ({ todoCards }) => {
  return {
    todoCards: todoCards.map(card => {
      return card.id === id ? { ...card, id, title } : card
    })
  }
}

const delCard = id => ({ todoCards }) => {
  return { todoCards: todoCards.filter(card => card.id !== id) }
}

const newCard = () => ({ todoCards }) => {
  return { todoCards: [...todoCards, { id: uuid(), title: '', color: 'GhostWhite' }] }
}

const switchColor = (id, color) => ({ todoCards }) => ({
  todoCards: todoCards.map(card => {
    return card.id === id ? { ...card, color } : card
  })
})

export { updateTitle, delCard, newCard, switchColor }
