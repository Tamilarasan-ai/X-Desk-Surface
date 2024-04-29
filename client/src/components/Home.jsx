import About from "./About"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Services from "./Service"


function Home() {
  return (
    <div id="home">
      <Navbar/>
    
      <About/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default Home
