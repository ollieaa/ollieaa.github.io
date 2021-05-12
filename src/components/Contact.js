import React, {useState} from 'react'

export default function Contact() {

  return <section id='contact'>
    <h2>CONTACT</h2>
    <p>I would love to hear from you!</p>
    <div id='contactLinks'>
      <a href='mailto:ollie.a.anderson@gmail.com'><img src='https://i.pinimg.com/originals/8f/c3/7b/8fc37b74b608a622588fbaa361485f32.png' id='email'/></a>
      <a href='https://www.linkedin.com/in/ollieaa/' target='_blank'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/1200px-Linkedin_icon.svg.png' id='linkedIn'/></a>
      <a href='https://github.com/ollieaa' target='_blank'><img src='https://www.freeiconspng.com/thumbs/github-icon/github-icon-4.jpg' id='github'/></a>
    </div>
  </section>
}