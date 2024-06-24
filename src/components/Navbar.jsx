import React,{ useState, useEffect }  from 'react'
import logo from '../assets/HKLogo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu,setMenu] = useState("menu")
  return (
    <nav className='mb-5 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-16  text-2xl' src={logo} alt='logo' />
        </div>
        <div >
          <ul className=' m-8 flex items-center justify-center gap-6 text-2xl'>
            <li><AnchorLink className= " no-underline text-white " offset= {50} href='#home' ><p onClick={() => setMenu("home")}>Home</p></AnchorLink></li>
            <li><AnchorLink className= "no-underline text-white " offset= {50} href='#about' ><p onClick={() => setMenu("about")}>About</p></AnchorLink></li>
            <li><AnchorLink className= "no-underline text-white " offset= {50} href='#skills' ><p onClick={() => setMenu("skills")}>Skills</p></AnchorLink></li>
            <li><AnchorLink className= "no-underline text-white " offset= {50} href='#experience' ><p onClick={() => setMenu("experience")}>Experience</p></AnchorLink></li>
            <li><AnchorLink className= "no-underline text-white " offset= {50} href='#projects' ><p onClick={() => setMenu("projects")}>Projects</p></AnchorLink></li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar