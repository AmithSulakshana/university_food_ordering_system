import React from "react"
import { Link } from "react-router-dom";

function Logging(){
 
    return(
        <div class="bg-slate-600 h-screen">
          {/*  <img class='h-screen' src="/images/sciencecanteen.jpg" alt="/" />
            */}
            <div class='bg-black h-16 text-white px-20 text-4xl font-bold'>
                Easy Food Ordering
            </div>
             <form class="bg-gray-400 shadow-md rounded px-20 h-1/2">
             
                  <div class="mb-4">
                     <label class="block text-gray-700 text-lg font-bold mb-2" for="username">
                         Username
                     </label>
                        <input class="shadow appearance-none border rounded w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                 </div>

                 <div class="mb-6">
                       <label class="block text-gray-700 text-lg font-bold mb-2" for="password">
                           Password
                       </label>
                             <input class="shadow appearance-none border border-red-500 rounded w-72 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                                   <p class="text-red-500 text-lg italic">Please choose a password.</p>
                 </div>

                 <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                           <Link to='/HeadlineCardsComponent'>Sign In</Link>
                       </button>
                       {/*
                         <a class="py-2 text-sm text-blue-500 hover:text-blue-800 " href="#">
                          Forgot Password?
                            </a> */}
                </div>
             </form>
               
        </div>
    )

}

export default Logging;