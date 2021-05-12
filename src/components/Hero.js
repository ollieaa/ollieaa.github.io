import React from 'react'



export default function Hero() {

  return <section id='hero'>
    <div id='heroTitle'>
      <h1 className='name first'>OLLIE ANDERSON</h1>
      <h3 className='name second'>Junior Web Dev</h3>
    </div>  
    <ul>
      <li><a href='#about'>ABOUT</a></li>
      <li><a href='#projects'>PROJECTS</a></li>
      {/* <li><a href='#interests'>INTERESTS</a></li> */}
      <li><a href='#contact'>CONTACT</a></li>
    </ul>  
  </section>
  
    

}
