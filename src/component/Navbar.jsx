import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";



function NavbarComponent(){

    const [nav, setNav] = useState(false);
    
    return(
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 bg-slate-400'>
            
            <div onClick={() =>setNav(!nav)} className= 'cursor-pointer'>
                    <AiOutlineBars size={40}/>
            </div>

            <div className= 'flex items-center'>
                
                <h1 className= 'text-2xl sm:text-3xl lg:text-4xl px-2'>
                    <span className= 'font-bold'>UNIVERSITY FOOD ORDERING SYSTEM</span>
                </h1>
                
            </div>

            <div className= 'bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                {/*search input*/}
                <AiOutlineSearch size={40}/>
                <input
                  className= 'bg-transparent p-2 w-full focus:outline-none'
                 />
            </div>

            {nav ? <div className= 'bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>:''}

            <div className= {nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300':'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
        
                <AiOutlineClose size={25} onClick={() => setNav(!nav)} className= 'absolute right-4 cursor-pointer'/>
                <h2 className= 'text-2xl p-4'>MENU</h2>
                <nav>
                    <ul className= 'flex flex-col p-4 text-gray-800'>
                        <li className= 'text-xl py-4 flex'>
                            singin
                        </li>
                        <li className= 'text-xl py-4 flex'>
                            singup
                        </li>
                        <li className= 'text-xl py-4 flex'>
                            Help
                        </li>

                    </ul>
                </nav>
            </div>
            

           
            {/*log button*/}
            <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg">
            <Link to='/Logging'>Singin</Link>
            </button>
            
            

            {/*singup button*/}
            <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg">
              <Link to='/SingUp'>SingUp</Link>
            </button>
            
            
            


        </div>
    )
}
export default NavbarComponent