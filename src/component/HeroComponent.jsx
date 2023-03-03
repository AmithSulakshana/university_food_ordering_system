import React from "react";

function HeroComponent() {
    return(
        <div className= 'max-w-[1640px] max-auto px-4 bg-slate-200 m-2'>
            <div className= 'max-h-[500px] relative'>
                <div>
                    <h1 className= 'px-4'>
                        <span className= 'text-orange-600 text-5xl font-bold'>Easy</span>
                    </h1>
                    <h1 className= 'px-4 text-4xl font-bold'>
                        Food<span className= 'text-orange-600 text-4xl'> Ordering</span>
                    </h1>
                </div>
                <img className= 'w-full max-h-[340px] object-cover rounded-lg m-4' src="/images/imagepr.jpg" alt='/'/>
            </div>
        </div>
    )
}
export default HeroComponent