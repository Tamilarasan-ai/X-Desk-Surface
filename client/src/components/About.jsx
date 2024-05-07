import GradientGenerator from './Gradient'
import Servocontrol from './Servocontrol'

export default function About() {
  return (
    <section id="about" className="about">
    <div className="container1">
      <h2 className='about-heading ml-4 font-bold flex w-full justify-center'>Aura & Controls</h2>
      <p className='about-content ml-4'></p>
      <div className="action flex flex-wrap">
      <div className="img w-1/2 "><GradientGenerator/> </div>
      <div className="control-container w-1/2 "> <Servocontrol/> </div>
      </div>
    </div>
  </section>
  )
}
