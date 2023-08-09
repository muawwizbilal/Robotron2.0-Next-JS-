import React from "react"
import Link from "next/link"
const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <h1>Join the Futuristic Robotics Revolution at Robotron 2.0!</h1>
          </div>
          <div>
            <button className='button-primary'><Link href="/register">Register Now</Link></button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
