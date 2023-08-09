import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/categories"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { Brand } from "@/components/router"
import React from "react"
import Link from "next/link"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <h1 className='hero-title'>IGNITE THE INNOVATION</h1>

          <div className='sub-heading'>
            <TitleSm title='Event Date : 25 & 26 October' /> 
            <br />
            <br />
            <br />
           
          </div>  
          <button className="button_hero"><Link href="/register">Register Now</Link></button>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='The Best Robotic Competition' />
            <p>Introducing Robotron 2.0 - Empowering Future Innovators! Our revolutionary robotics event builds a foundation for the next generation of global citizens, fostering technical curiosity, developmental thinking, and innovation. Through mind-boggling concepts like speed coding and robotic programming, Robotron 2.0 enlightens the vast world of technology, allowing participants to polish their skills and flourish in this dynamic field. Join us on this transformative journey towards a brighter technological future.




</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <ShowCase />
      <Brand />
      

      </>
  )
}

export default Hero
