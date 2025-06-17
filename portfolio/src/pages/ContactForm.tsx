import React, { useState } from 'react'
import { images } from '../constants/images'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import '../utils/Contact.css'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')
  

  const handleSubmit = async (e:any) => {
    e.preventDefault(); // ✅ Prevent page reload

    if (!name || !email || !text) {
      toast.error('Please fill in all fields');
      return;
    }

    const formData = {
      name,
      email,
      text,
    };

    try {
      const response = await fetch('https://formspree.io/f/manjbwnl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully! 🚀 Thanks for contacting use, we'll get back to you soon 😇");
        setName('');
        setEmail('');
        setText('');
      } else {
        toast.error("Oops! Something went wrong.");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    }
  };


  return (
    <div id='contact' className='text-white p-4 mt-5 mb-10'>
      <h1 className='ml-150 text-5xl share-tech-bold underline text-indigo-300'>Contact Me</h1>
      <div className="contact-container flex gap-15 mt-10 justify-center">
        <img src={images.contact} alt="ContactImg" className='w-120 rounded-xl shadow-2xl shadow-indigo-400' />
        <form onSubmit={handleSubmit}
          className='flex flex-col p-2 gap-7'
        >

          {/* Name */}
          <div className="box-1 box flex flex-col mt-5 text-indigo-100">
            <label htmlFor="name" className='text-xl poppins-regular'>Name:</label>
            <input type="text" name="name" value={name}
              placeholder='Enter your name' required
              className='bg-blue-600/30 p-2 w-110 mt-4 rounded-xl ml-3'
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="box flex flex-col text-indigo-100">
            <label htmlFor="email" className='text-xl poppins-regular'>Email:</label>
            <input type="email" name='email'
              placeholder='Enter your email' required value={email}
              className='bg-blue-600/30 p-2 w-110 mt-4 rounded-xl ml-3'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* TextArea */}
          <div className="box flex flex-col text-indigo-100">
            <label htmlFor="msg" className='text-xl poppins-regular'>Your Message:</label>
            <textarea name="msg" id=""
              placeholder='Enter your message' required value={text}
              className='bg-blue-600/30 p-2 w-110 mt-4 rounded-xl ml-3 h-20'
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>

          {/* submit btn */}
          <div className="flex justify-center">
            <button type='submit' className='cursor-pointer text-center bg-blue-700/80 hover:bg-blue-800/80 transition-all delay-75 duration-200 w-40 text-xl rounded-2xl py-2 font-mono'>Send</button>
          </div>
        </form>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
           />
      </div>
    </div>
  )
}

export default ContactForm
