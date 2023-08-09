import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title=' Win Cash Prizes' />
            <p>Get ready to compete for the biggest prize in robotics history! Robotron 2.0 offers  incredible prizes for the winners of our flagship competition category. Unleash your creativity, showcase your technical brilliance, and stand a chance to claim this prestigious and lucrative prize. Don't miss this opportunity to turn your passion for robotics into a life-changing experience!</p>
          </div>
          <div className='hero-content grid-4'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise