// src/components/ContactForm.tsx
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../redux/actions'

const ContactForm: React.FC = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    dispatch(addContact(formData))
    setFormData({ fullName: '', email: '', phone: '' })
  }

  return (
    <div>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Nome Completo"
      />
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="E-mail"
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Telefone"
      />
      <button onClick={handleSubmit}>Adicionar Contato</button>
    </div>
  )
}

export default ContactForm
