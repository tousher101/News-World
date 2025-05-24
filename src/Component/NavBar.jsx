import React from 'react'
import menuIcon from '../assets/bx-menu.svg'
import closeIcon from '../assets/bx-x.svg'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'


function NavBar() {
    const [bgcol,setBgCol]=useState('bg-gray-800');
    const [btnText,setBtnText]=useState('Dark Mode');

    const [alertText,setAlertText]=useState(null);
    const displayAlert=(message,type)=>{
    setAlertText({
        msg:message,
        ty:type
    });
    setTimeout(()=>{
        setAlertText(null)
    },2000)
    }


const handleClick=()=>{
   
 if(bgcol==='bg-gray-800'){setBgCol('bg-gray-900'); document.body.style.backgroundColor=('Black')}
    else{setBgCol('bg-gray-800'); document.body.style.backgroundColor=('White')}
if(btnText==='Dark Mode'){setBtnText('Light Mode'); displayAlert('Dark Mode Active', 'Sucess') } 
else{setBtnText('Dark Mode');displayAlert('Light Mode Active', 'Sucess') }

}
   
  return (
    <>
    <nav className={`max-w-[1380px] m-auto h-[80px] ${bgcol} lg:hidden md:flex flex justify-center items-center fixed top-0 left-0 right-0 z-10`}>
    <div><h1 className='font-serif md:text-5xl text-4xl text-center text-white lg:hidden'>News World</h1></div>
    <div className='lg:hidden'>
        <input type='checkbox' className='hidden peer' id='toggled'/>
        <div className='absolute right-[10px] top-[20px]'>
            <label htmlFor='toggled' className='lg:hidden cursor-pointer'>
                <img className='w-8 mb-[20px]' src={menuIcon}/>
            </label>
        </div>
        <aside className={`${bgcol} fixed top-0 right-0 h-full w-[180px] text-white transition-transform duration-1000 - translate-x-full
        peer-checked:translate-x-0 z-10`}>
            <div className='flex justify-end p-4'>
                <label htmlFor='toggled' className='cursor-pointer'><img className='w-8' src={closeIcon}/> </label>
            </div>
            <ul className='space-y-10 p-4 flex flex-col'>
                <li><NavLink to='/'>Home</NavLink></li>
                 <li><NavLink to='/General'>General</NavLink></li>
                  <li><NavLink to='/Business'>Business</NavLink></li>
                   <li><NavLink to='/Sports'>Sports</NavLink></li>
                    <li><NavLink to='/Entertainment'>Entertainment</NavLink></li>
                     <li><NavLink to='/Technology'>Technology</NavLink></li>
                      <li><NavLink to='/Health'>Health</NavLink></li>
                      <button onClick={handleClick} className='border-1 p-[10px] rounded-2xl cursor-pointer'>{btnText}</button>
                      

            </ul>
        </aside>
    </div>
    </nav>
  

    <nav className={`max-w-[1380px] m-auto h-[80px] ${bgcol} md:hidden hidden lg:flex items-center fixed top-0 left-0 right-0 z-10`}>
        <div className='flex-[28%] text-white ml-[15px]'><h1 className='lg:text-5xl font-serif'>News World</h1></div>
        <ul className='flex-[72%] flex justify-around items-center text-xl text-white'>

                <li><NavLink to='/'>Home</NavLink></li>
                 <li><NavLink to='/General'>General</NavLink></li>
                  <li><NavLink to='/Business'>Business</NavLink></li>
                   <li><NavLink to='/Sports'>Sports</NavLink></li>
                    <li><NavLink to='/Entertainment'>Entertainment</NavLink></li>
                     <li><NavLink to='/Technology'>Technology</NavLink></li>
                      <li><NavLink to='/Health'>Health</NavLink></li>
                      <button onClick={handleClick} className='border-1 p-[10px] rounded-2xl cursor-pointer hover:scale-125 duration-1000'>{btnText}</button>
        </ul>
         
    </nav>
        <div className='max-w-[1380px] mx-auto h-[40px] mt-[80px] fixed top-0 left-0 right-0 z-10 '>
   { alertText && <div className=' bg-gray-500 text-white h-[40px] content-center '><strong>{alertText.ty}</strong> : {alertText.msg}</div> }
    </div>

  
    
    </>
  )
}

export default NavBar
