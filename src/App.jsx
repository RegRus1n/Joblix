import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ProfessionsPage from './pages/ProfessionsPage/ProfessionsPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/professions" element={<ProfessionsPage />} />
      </Routes>
    </>
  )
}

export default App
