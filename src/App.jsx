import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CardPractice from './pages/CardPractice'
import DayOne from './pages/gpt/DayOne'
import DayTwo from './pages/gpt/DayTwo'
import DayThree from './pages/gpt/DayThree'

function App() {
  return (
    <>
      <BrowserRouter basename="/grid-system">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/card-practice" element={<CardPractice />} />
          <Route exact path="/day-one" element={<DayOne />} />
          <Route exact path="/day-two" element={<DayTwo />} />
          <Route exact path="/day-three" element={<DayThree />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
