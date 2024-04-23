import './App.css'
import Container from './Container/Container'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'

function App() {

  return (
    <>
      <Container>
        <Navbar />
        <Home/>
        <Footer/>
      </Container>
    </>
  )
}

export default App
