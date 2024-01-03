// src/App.tsx
import React from 'react'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import GlobalStyles from './styles/index'

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyles />
      <h1>Agenda de Contatos</h1>
      <ContactForm />
      <ContactList />
    </div>
  )
}

export default App
