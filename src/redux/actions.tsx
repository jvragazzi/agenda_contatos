// src/redux/actions.tsx
import { Contact } from './reducers'
import { v4 as uuidv4 } from 'uuid'

export const addContact = (contact: Omit<Contact, 'id'>) => ({
  type: 'ADD_CONTACT',
  payload: { id: uuidv4(), ...contact }
})

export const removeContact = (id: number) => ({
  type: 'REMOVE_CONTACT',
  payload: id
})

export const editContact = (id: number, updatedContact: Contact) => ({
  type: 'EDIT_CONTACT',
  payload: { id, updatedContact }
})
