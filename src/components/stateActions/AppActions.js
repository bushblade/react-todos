import uuid from 'uuid'

const updateTitle = (id, title) => ({ todoCards }) => {
  return {
    todoCards: todoCards.map(card => {
      return card.id === id ? { id, title } : card
    })
  }
}

const delCard = id => ({ todoCards }) => {
  localStorage.removeItem(id)
  return { todoCards: todoCards.filter(card => card.id !== id) }
}

const newCard = () => ({ todoCards }) => {
  return { todoCards: [...todoCards, { id: uuid(), title: 'test title...' }] }
}

export { updateTitle, delCard, newCard }
