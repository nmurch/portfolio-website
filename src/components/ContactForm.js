import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './styles/Contact.css';

const ContactForm = () => {
    const form = useRef()

    const submitHandler = (e) => {
        e.preventDefault()

        emailjs.sendForm (
            'service_uyrzq9r', 
            'template_vn6mc6c',
            form.current,
            'z2lzr-h72dPdaGJQV'
        ).then (
            (result) => {
                console.log(result.text)
                console.log('Message sent')
                e.target.reset()
            },
            (error) => {
                console.log(error.text)
            }
        )
    }

  return (
    <div className='contact-container'>
        <h1>Contact</h1>
        <p>Email me with any questions!</p>
        <div className='form-container'>
            <form ref={form} onSubmit={submitHandler}>
                <div className='form-row'>
                    <div className='form-two-col floating-label-container'>
                        <input
                        type='text' 
                        className='form-name'
                        name='user_name'
                        required
                        />
                        <label className='floating-label'>Name</label>
                    </div>
                    <div className='form-two-col floating-label-container'>
                        <input 
                        type='email' 
                        className='form-email'
                        name='user_email'
                        required
                        />
                        <label className='floating-label'>Email</label>
                    </div>
                </div>
                <div className='form-row form-col floating-label-container'>
                    <input
                    type='text' 
                    className='form-subject'
                    name='subject'
                    required
                    />
                    <label className='floating-label'>Subject</label>
                </div>
                <div className='form-row form-col floating-label-container'>
                    <textarea
                    rows='4'
                    className='form-textarea'
                    name='message'
                    required
                    ></textarea>
                    <label className='floating-label'>Message</label>
                </div>
                <button type='submit' className='standard-btn submit-btn'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactForm