import { Outlet } from 'react-router-dom'
import './App.css'
import Container from './Container/Container'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'

function App() {

  return (
    <>
      <Container>
        <Navbar />
        {/* <Outlet /> */}
        <Home/>
        <Footer />
      </Container>
    </>
  )
}

export default App
