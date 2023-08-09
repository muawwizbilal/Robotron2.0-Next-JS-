import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import register from "@/sections/register"
const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='robotron' caption='7' className='logobg' />
              <br />
              <span>
                If you encounter any problem, do not hesitate to call us  <br /> on the given number.
              </span>
              <br />
              <br />
              <h3>+92 345 3468881</h3>
              <br />
              <button className='button-primary'><Link href="/register">Register Now</Link></button>
            </div>

            <ul >
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href='https://www.facebook.com/thelabschool.pk' target='_blank' rel='noopener noreferrer'>
                    <BsFacebook size={25} />
                  </Link>

                </li>
                <li>
                <Link href='https://www.instagram.com/robotron1.0/' target='_blank' rel='noopener noreferrer'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
              
                <li>
                  <Link href='https://pk.linkedin.com/company/the-lab-school' target="_blank">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2023 Robotron. Made By Muhammad Muawwiz</span>
            </div>

          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
