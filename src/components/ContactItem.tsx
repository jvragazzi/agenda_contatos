// src/components/ContactItem.tsx
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeContact, editContact } from '../redux/actions'
import { ContactItemWrapper } from './ContactStyled'

interface ContactItemProps {
  contact: {
    id: number
    fullName: string
    email: string
    phone: string
  }
}

const ContactItem: React.FC<ContactItemProps> = ({ contact }) => {
  const dispatch = useDispatch()
  const [isEditing, setEditing] = useState(false)
  const [editedData, setEditedData] = useState({ ...contact })

  const handleRemove = () => {
    dispatch(removeContact(contact.id))
  }

  const handleEdit = () => {
    setEditing(true)
  }

  const handleSave = () => {
    dispatch(editContact(contact.id, editedData))
    setEditing(false)
  }

  const handleCancel = () => {
    setEditing(false)
    setEditedData({ ...contact })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value })
  }

  return (
    <ContactItemWrapper>
      <div>
        {isEditing ? (
          <>
            <input
              type="text"
              name="fullName"
              value={editedData.fullName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              value={editedData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              value={editedData.phone}
              onChange={handleChange}
            />
          </>
        ) : (
          <>
            <p>{contact.fullName}</p>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
          </>
        )}
      </div>
      <div>
        {isEditing ? (
          <>
            <button onClick={handleSave}>Salvar</button>
            <button onClick={handleCancel}>Cancelar</button>
          </>
        ) : (
          <>
            <button onClick={handleEdit}>Editar</button>
            <button onClick={handleRemove}>Remover</button>
          </>
        )}
      </div>
    </ContactItemWrapper>
  )
}

export default ContactItem
