import React from "react";
import { Link } from "react-router-dom";

function canteen(name,lin) {
    return(
        <div className= 'rounded-xl relative'>
            <div className= 'absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className= 'font-bold text-2xl px-2 pt-4'>name</p>
                    <Link to='lin'className= 'text-lg text-white px-20' >ENTER</Link>
                
                </div>
                <img className= 'max-h-[1600px] md:max-h-[200px] w-full object-cover rounded-xl' src="/images/jayathilakacanteen.jpg" alt="/" />
            


        </div>
    )
}

export default canteen;