import { Outlet } from 'react-router-dom'
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
        <Outlet />
        <Footer />
      </Container>
    </>
  )
}

export default App
