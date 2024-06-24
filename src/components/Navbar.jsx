import React,{ useState, useEffect }  from 'react'
import logo from '../assets/HKLogo.png'


const Navbar = () => {

  return (
    <nav className='mb-5 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-16  text-2xl' src={logo} alt='logo' />
        </div>


        <div className=' m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Experience</a>
            <a href='#'>Projects</a>
            <a href='#'>ContactMe</a>
        </div>
    </nav>
  )
}

export default Navbar