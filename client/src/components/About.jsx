import GradientGenerator from './Gradient'
import Servocontrol from './Servocontrol'

export default function About() {
  return (
    <section id="about" className="about">
    <div className="container1">
      <h2>About Us</h2>
      <p>This is the about section.</p>
      <div className="action">
      <div className="img"><GradientGenerator/></div>
      <div className="buttons">  <Servocontrol/></div>
      </div>
    </div>
  </section>
  )
}
