import { Title, TitleSm } from "@/components/common/Title"
import React from "react"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import { FiHeadphones, FiHelpCircle } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"
import { useState } from "react"
const Contact = () => {
    const [submitting, setSubmitting] = useState(false);
    const [submissionError, setSubmissionError] = useState(false);
    const [name, setName] = useState('');
    const [emailId, setEmailid] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);

        try {
            const formData = {
                name,
                emailId,
                message,
            };

            const rawResponse = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const content = await rawResponse.json();
            alert("Form Submitted Successfully", content.data.tableRange);

            event.target.reset();
            setName('');
            setEmailid('');
            setMessage('');
            setSubmissionError(false);
        } catch (error) {
            setSubmissionError(true);
        }

        setSubmitting(false);
    };

    return (
        <section className='contact bg-top'>
            <div className='container'>
                <div className='heading-title'>
                    <br />
                    <Title title='Contact Form' className='title-bg' />
                </div>
                <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-deatils'>
                <div className='box'>
                  <FiHeadphones size={30} className='icons' />
                  <h3>+92 345 3468881</h3>
                  <span>Call us: Mon - Fri 8:00 - 3:00</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>Karachi</h3>
                  <span>North Nazimabad Block N Karachi</span>
                </div>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
               <h3>robotron@thelabschool.pk</h3>
                  <span>Email us for any kind of help.</span>
                </div>
               
              </div>
              <ul>
                <li className='icon'>
                  <BsFacebook size={25} />
                </li>
                <li className='icon'>
                  <AiFillBehanceCircle size={25} />
                </li>
                <li className='icon'>
                  <AiFillInstagram size={25} />
                </li>
                <li className='icon'>
                  <AiFillLinkedin size={25} />
                </li>
              </ul>
            </div>
            <div className='right w-70'>
              <TitleSm title='Make an online enquiry' />
              <p className='desc-p'>Fill The Form For Any Help</p>

                        {/* Contact form */}
                        <form onSubmit={handleSubmit}>
                            <div className='inputs'>
                                <span>Name</span>
                                <input
                                    type='text'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='inputs'>
                                <span>Email</span>
                                <input
                                    type='email'
                                    value={emailId}
                                    onChange={(e) => setEmailid(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='inputs'>
                                <span>Message</span>
                                <textarea
                                    cols='30'
                                    rows='10'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <button className='button-primary' type='submit' disabled={submitting}>
                                {submitting ? 'Submitting...' : 'Submit'}
                            </button>

                            {submissionError && (
                                <div className='error-message'>
                                    Submission failed. Please try again.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
