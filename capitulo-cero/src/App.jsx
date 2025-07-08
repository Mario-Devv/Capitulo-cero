import './App.css'
import { Header } from './components/header/Header.jsx'
import { Characteristics } from './sections/characteristics/Characteristics.jsx'
import { OurCommunity } from './sections/ourcom/OurCommunity.jsx'
import { PopularBooks } from './sections/Popular_Books/PopularBooks.jsx'
import { Welcome } from './sections/welcome/Welcome.jsx'

function App() {
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
    </>
  )
}

export default App
