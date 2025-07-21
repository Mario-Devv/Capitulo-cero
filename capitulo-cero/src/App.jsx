import './App.css'
import { Footer } from './components/footer/Footer.jsx'
import { Header } from './components/header/Header.jsx'
import { Characteristics } from './sections/characteristics/Characteristics.jsx'
import { OurCommunity } from './sections/ourcom/OurCommunity.jsx'
import { PopularBooks } from './sections/Popular_Books/PopularBooks.jsx'
import { Welcome } from './sections/welcome/Welcome.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LoginUsers } from './components/login/mobile/Login.jsx'

function LandingLayout() {
  
  return (
    <>
      {/* Components */}
      <Header />
      {/* Sections */}
      <main>
        <Welcome />
        <Characteristics />
        <PopularBooks />
        <OurCommunity />
      </main>
      <Footer />
    </>
  )
}


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingLayout />}/>
        <Route path='/login' element={<LoginUsers />}/>
      </Routes>
    </Router>
  )
}

export default App
