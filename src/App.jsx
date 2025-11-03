import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CardPractice from './pages/CardPractice'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card-practice" element={<CardPractice />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
