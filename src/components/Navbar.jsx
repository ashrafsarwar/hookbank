import React,{useState} from 'react'
import {logo, menu, close} from '../assets'
import { navLinks } from '../constaants/data'
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
        <img src={logo} alt='Booko' className='w-[120px] h-[32px]'></img>
        <ul className='list-none sm:flex hidden judtify-end items-center text-white '>
            {navLinks.map((nav, index)=>{
                return <li key={nav.id}>
                 <a href={`#${nav.id}`} className={`font-poppins justify-between mx-4 font-normal cursor-pointer font-[16px] hover:text-secondary`}>
                    {nav.title}
                 </a>
                </li>
            })}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={()=>setToggle(!toggle)}></img>
      
        <div className={`${toggle ? 'flex' : 'hidden' } p-6 top-20 right-0 bg-black-gradient mx-4 absolute rounded-xl sidebar my-2 min-w-[140px] w-[50px]`}>

        <ul className='flex 
         judtify-end items-center  flex-col ' >
            {navLinks.map((nav, index)=>{
                return <li key={nav.id}>
                 <a href={`#${nav.id}`} className={`font-poppins font-normal cursor-pointer font-[16px] ${index === navLinks.length - 1 ? 'mr-0': 'mb-10'} text-white` }>
                    {nav.title}
                 </a>
                </li>
            })}
        </ul>
        </div>
        </div>
    </nav>
  )
}

export default Navbar