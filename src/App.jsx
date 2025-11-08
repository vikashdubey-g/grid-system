import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CardPractice from './pages/CardPractice'
import DayOne from './pages/gpt/DayOne'
import DayTwo from './pages/gpt/DayTwo'
import DayThree from './pages/gpt/DayThree'
import DayFour from './pages/gpt/DayFour'
import DayFive from './pages/gpt/DayFive'
import PageOne from './pages/sampleLayouts/PageOne'
import FrUnit from './pages/FrUnit'

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
          <Route exact path="/day-four" element={<DayFour />} />
          <Route exact path="/day-five" element={<DayFive />} />
          {/* Layouts */}
          <Route exact path="/page-one" element={<PageOne />} />
          {/* FR Unit */}
          <Route exact path="/fr-unit" element={<FrUnit />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
