import uuid from 'uuid'

const id1 = uuid(),
  id2 = uuid(),
  id3 = uuid()

const todoCards = {
  todoCards: [
    {
      id: id1,
      title: 'To do app built with ReactJS',
      color: 'GhostWhite'
    },
    {
      id: id2,
      title: `To do's are stored in local storage`,
      color: 'PaleTurquoise'
    },
    {
      id: id3,
      title: 'Click the button in the bottom right to add a to do card',
      color: 'PapayaWhip'
    }
  ]
}
const card1 = {
  title: 'To do app built with ReactJS',
  id: id1,
  todos: [
    {
      text: 'this to do is the default colour',
      id: uuid(),
      checked: false
    },
    {
      text: 'this one is checked',
      id: uuid(),
      checked: true
    }
  ]
}
const card2 = {
  id: id2,
  title: `To do's are stored in local storage`,
  todos: [
    {
      text: 'there is a dropdown to choose colour',
      id: uuid(),
      checked: false
    },
    {
      text: `this one is 'PaleTurquoise'`,
      id: uuid(),
      checked: false
    },
    {
      text: 'the X deletes a to do ->',
      id: uuid(),
      checked: false
    }
  ]
}
const card3 = {
  id: id3,
  title: 'Click the button in the bottom right to add a to do card',
  todos: [
    {
      text: 'the trash can icon deletes a card',
      id: uuid(),
      checked: false
    }
  ]
}

const defaultCards = () => {
  localStorage.setItem('todo-cards', JSON.stringify(todoCards))
  localStorage.setItem(id1, JSON.stringify(card1))
  localStorage.setItem(id2, JSON.stringify(card2))
  localStorage.setItem(id3, JSON.stringify(card3))
}

export default defaultCards
