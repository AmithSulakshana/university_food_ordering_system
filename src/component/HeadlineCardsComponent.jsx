import React from "react";
import { Link } from "react-router-dom";

function HeadlineCardsComponent() {
    return(
        <div class='bg-green-200 pb-48'>

          <div>
                  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                        <div class="flex items-center flex-shrink-0 text-white mr-6">
                            <span class="font-semibold text-xl tracking-tight">University Canteens</span>
                        </div>

                         <div class="block lg:hidden">
                                 <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                                     <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                                 </button>
                         </div>

                         <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                             <div class="text-sm lg:flex-grow">
                                  <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                       Favourite
                                  </a>
                                  <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                       My Account
                                  </a>
                                  
                             </div>
                         <div>
                           <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Cart</a>
                         </div>
                         </div>
                 </nav>


          </div>
            
          <div className= 'max-w-[1600px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            <div className= 'rounded-xl relative'>
                <div className= 'absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className= 'font-bold text-2xl px-2 pt-4'>Science Canteen</p>
                    <Link to='/canteen' className= 'text-lg text-white px-20' >ENTER</Link>
                
                </div>
                <img className= 'max-h-[1600px] md:max-h-[200px] w-full object-cover rounded-xl' src="/images/sciencecanteen.jpg" alt="/" />
            </div>

            <div className= 'rounded-xl relative'>
                <div className= 'absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className= 'font-bold text-2xl px-2 pt-4'>Jayathilaka Canteen</p>
                    <Link to='/jayathilakacanteen' className= 'text-lg text-white px-20' >ENTER</Link>
                
                </div>
                <img className= 'max-h-[1600px] md:max-h-[200px] w-full object-cover rounded-xl' src="/images/jayathilakacanteen.jpg" alt="/" />
            </div>

            <div className= 'rounded-xl relative'>
                <div className= 'absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className= 'font-bold text-2xl px-2 pt-4'>Wus Canteen</p>
                    <Link to='/jayathilakacanteen' className= 'text-lg text-white px-20' >ENTER</Link>
                
                </div>
                <img className= 'max-h-[1600px] md:max-h-[200px] w-full object-cover rounded-xl' src="/images/wus.jpg" alt="/" />
            </div>

            <div className= 'rounded-xl relative'>
                <div className= 'absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className= 'font-bold text-2xl px-2 pt-4'>Jenning Canteen</p>
                    <Link to='/jayathilakacanteen' className= 'text-lg text-white px-20' >ENTER</Link>
                
                </div>
                <img className= 'max-h-[1600px] md:max-h-[200px] w-full object-cover rounded-xl' src="/images/jenningscanteen.jpg" alt="/" />
            </div>

            <div className= 'rounded-xl relative'>
                <div className= 'absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className= 'font-bold text-2xl px-2 pt-4'>Wijewardana Canteen</p>
                    <Link to='/jayathilakacanteen' className= 'text-lg text-white px-20' >ENTER</Link>
                
                </div>
                <img className= 'max-h-[1600px] md:max-h-[200px] w-full object-cover rounded-xl' src="/images/jayathilakacanteen.jpg" alt="/" />
            </div>

            <div className= 'rounded-xl relative'>
                <div className= 'absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className= 'font-bold text-2xl px-2 pt-4'>Hilda Canteen</p>
                    <Link to='/jayathilakacanteen' className= 'text-lg text-white px-20' >ENTER</Link>
                
                </div>
                <img className= 'max-h-[1600px] md:max-h-[200px] w-full object-cover rounded-xl' src="/images/hilda.jpg" alt="/" />
            </div>

            

            

          </div>

          </div>

          

          

          

        

    )
}

export default HeadlineCardsComponent