// src/redux/reducers.tsx
import { combineReducers } from 'redux'

export interface Contact {
  id: number
  fullName: string
  email: string
  phone: string
}

export interface ContactAction {
  type: string
  payload: any // Ajuste para o tipo apropriado se necessário
}

export interface RootState {
  contacts: Contact[]
}

const contactsReducer = (state: Contact[] = [], action: ContactAction) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [...state, action.payload]
    case 'REMOVE_CONTACT':
      return state.filter((contact) => contact.id !== action.payload)
    case 'EDIT_CONTACT':
      return state.map((contact) =>
        contact.id === action.payload.id
          ? action.payload.updatedContact
          : contact
      )
    default:
      return state
  }
}

const rootReducer = combineReducers({
  contacts: contactsReducer
})

export default rootReducer
