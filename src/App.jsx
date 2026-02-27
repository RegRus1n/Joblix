import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ProfessionsPage from './pages/ProfessionsPage/ProfessionsPage'
import AboutUs from './pages/AboutUs/AboutUs'
import ProfessionLevels from './pages/ProfessionLevels/ProfessionLevels'
import SimulationLab from './components/SimulationLab/SimulationLab'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/professions" element={<ProfessionsPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/profession/:professionId" element={<ProfessionLevels/>} />
        <Route path="/profession/:professionId/level/:levelId/task/:taskId" element={<SimulationLab/>} />
      </Routes>
    </>
  )
}

export default App
