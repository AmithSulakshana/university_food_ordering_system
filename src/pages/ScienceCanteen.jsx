import React from "react";

function ScienceCanteen(){
    return(
        
        <div className= 'max-w-[1200px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
                <div className= 'rounded-xl relative'>
                    <div className= 'absolute w-full h-full bg-black/50 rounded-xl text-white'>
                      <p className= 'font-bold text-2xl px-2 pt-4'>Rice and curry</p>
                      <p className= 'px-2'>curyy-Dal,chicken,papadam</p>
                      <p className= 'px-2'>price=180</p>
                      <button className= 'px-2 rounded bg-red-500'>ORDER Now</button>
                    </div>
                    <img className= 'max-h-[1600px] md:max-h-[200px] w-full object-cover rounded-xl' src="/images/rice.jpg" alt="/" />
                </div>

                <div className= 'rounded-xl relative'>
                    <div className= 'absolute w-full h-full bg-black/50 rounded-xl text-white'>
                      <p className= 'font-bold text-2xl px-2 pt-4'>Rice and curry</p>
                      <p className= 'px-2'>curyy-Dal,fish,papadam</p>
                      <p className= 'px-2'>price=150</p>
                      <button className= 'px-2 rounded bg-red-500'>ORDER NOW</button>
                    </div>
                    <img className= 'max-h-[1600px] md:max-h-[200px] w-full object-cover rounded-xl' src="/images/rice.jpg" alt="/" />
                </div>

                <div className= 'rounded-xl relative'>
                    <div className= 'absolute w-full h-full bg-black/50 rounded-xl text-white'>
                      <p className= 'font-bold text-2xl px-2 pt-4'>Rice and curry</p>
                      <p className= 'px-2'>curyy-Dal,egg,papadam</p>
                      <p className= 'px-2'>price=130</p>
                      <button className= 'px-2 rounded bg-red-500'>ORDER NOW</button>
                    </div>
                    <img className= 'max-h-[1600px] md:max-h-[200px] w-full object-cover rounded-xl' src="/images/rice.jpg" alt="/" />
                </div>

                <div className= 'rounded-xl relative'>
                    <div className= 'absolute w-full h-full bg-black/50 rounded-xl text-white'>
                      <p className= 'font-bold text-2xl px-2 pt-4'>Rice and curry</p>
                      <p className= 'px-2'>Chicken Rice</p>
                      <p className= 'px-2'>price=200</p>
                      <button className= 'px-2 rounded bg-red-500'>ORDER NOW</button>
                    </div>
                    <img className= 'max-h-[1600px] md:max-h-[200px] w-full object-cover rounded-xl' src="/images/rice.jpg" alt="/" />
                </div>

                <div className= 'rounded-xl relative'>
                    <div className= 'absolute w-full h-full bg-black/50 rounded-xl text-white'>
                      <p className= 'font-bold text-2xl px-2 pt-4'>Rice and curry</p>
                      <p className= 'px-2'>egg rice</p>
                      <p className= 'px-2'>price=180</p>
                      <button className= 'px-2 rounded bg-red-500'>ORDER NOW</button>
                    </div>
                    <img className= 'max-h-[1600px] md:max-h-[200px] w-full object-cover rounded-xl' src="/images/rice.jpg" alt="/" />
                </div>

                <div className= 'rounded-xl relative'>
                    <div className= 'absolute w-full h-full bg-black/50 rounded-xl text-white'>
                      <p className= 'font-bold text-2xl px-2 pt-4'>Rice and curry</p>
                      <p className= 'px-2'>vegy rice</p>
                      <p className= 'px-2'>price=150</p>
                      <button className= 'px-2 rounded bg-red-500'>ORDER NOW</button>
                    </div>
                    <img className= 'max-h-[1600px] md:max-h-[200px] w-full object-cover rounded-xl' src="/images/rice.jpg" alt="/" />
                </div>
        </div>
            

            
        
    )
}

export default ScienceCanteen