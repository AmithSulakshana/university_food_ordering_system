import React from "react";

function HeroCard(){
    return(
        <div class='grid grid-cols-3 gap-3 m-10'>
            
               <div class="max-w-sm rounded overflow-hidden shadow-lg">
                      <img class="w-full" src="/images/herocard1.jpg" alt=" " />

                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Rice and Curry</div>
                           <p class="text-gray-700 text-base">
                             Something write later..
                           </p>
                     </div>

                     <div class="px-6 pt-4 pb-2">
                       <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Available in jayathilaka canteen</span>
                       <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Tasty</span>
                    
                       </div>
                 </div>

             

            <div class="max-w-sm rounded overflow-hidden shadow-lg">
               <img class="w-full" src="/images/rice.jpg" alt=" " />

               <div class="px-6 py-4">
                 <div class="font-bold text-xl mb-2">Rice and Curry</div>
                    <p class="text-gray-700 text-base">
                     something write later...
                    </p>
                </div>

            <div class="px-6 pt-4 pb-2">
               <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Available in jennings canteen</span>
               <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Tasty</span>
               
          </div>
         </div>

         <div class="max-w-sm rounded overflow-hidden shadow-lg">
                      <img class="w-full" src="/images/herocard3.jpg" alt=" " />

                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Fruit Salad</div>
                           <p class="text-gray-700 text-base">
                             Something write later..
                           </p>
                     </div>

                     <div class="px-6 pt-4 pb-2">
                       <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Available in WUS canteen</span>
                       <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Tasty</span>
                    
                       </div>
                 </div>

        



        </div>
    )
}
export default HeroCard;