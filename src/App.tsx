import MuseumList from './features/components/MuseumsList'
import MuseumCard from './features/components/MuseumCard'
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'

function App() {

  return (
    <>
    <h1>Museum Explorer</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MuseumList/>} />
        <Route path="/details/:id" element={<MuseumCard/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
