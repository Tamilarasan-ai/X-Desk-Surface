import About from "./About"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Services from "./Service"
import '../Styles/Style.css'

function Home() {
  return (
    <div id="home" className="Home">
      <Navbar/>
      <About/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default Home
