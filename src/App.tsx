import { Route, Routes } from 'react-router-dom'
import TerminalBar from './components/TerminalBar'
import Home from './pages/Home'
import NotePage from './pages/NotePage'
import './App.css'

function App() {
  return (
    <div className="page-shell">
      <TerminalBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writing/:slug" element={<NotePage />} />
      </Routes>
    </div>
  )
}

export default App
