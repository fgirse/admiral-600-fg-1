import React from 'react'
import StyledHeroWohin from '../components/HeroWohin';
import Heading1 from '@/components/Headings/Heading2'; 
import Image from 'next/image'; 
import Modal3 from '../components/Modal3.js'
export default function Kontact()  {

    return(
    <>
    
    
{/* Section 1 */}

<section class="-mt-36px-2 pt-32 bg-bluegray-700 md:px-0">
<div className="-mt-52  container items-center max-w-6xl px-8 mx-auto xl:px-5">
<div className='mt-24 mx-auto w-11/12'>
<Image className="mt-24" src="/LogoAlt.png" layout="responsive" alt="Logo alt" height="280" width="1049"  />
</div>

<Heading1 className="hidden lg; block lg;w-11/12 lg:mx-auto">WOHIN?</Heading1>
<h1 className='mt-1 text-center text-red-400 text-7xl md:text-9xl lg:hidden'>WOHIN?</h1>
    <div class="mt-12 container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
    <h1 className="text-4xl font-extrabold tracking-tight text-left text-gray-300 sm:text-5xl md:text-6xl md:text-center">
                    <span className="block">LAGEPLAN <span class="block mt-1 text-yellow-400 lg:inline lg:mt-0">Rettungsanker Freiburg</span></span>
                    </h1>
                    <p className="w-full mx-auto text-base text-justify text-white [ -webkit-text-stroke-width: .15rem;]  md:max-w-md sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
                    Adelhauserstrasse 7c<br/>79098 Freiburg im Breisgau<br/>öffentlicher Nahverkehr: 
                    </p>
                    <div className="flex flex-col items-center justify-center border border-white  p-4 lg:flex flex-row justify-center items-center">
                        <div class
                        className="w-60 h-24">
                            <Image src="/VAG_Freiburg.png" layout="responsive" alt="Logo VAG-Freiburg" height="94" width="400"/>
                               </div>
                        <h1 className='text-3xl  text-orange-300'>HALTESTELLE</h1>

                        <h1 className='text-3xl  text-orange-300'>Holzmarkt</h1>
                        <h1 className='text-3xl  text-orange-300'>Linie 1 3 und 5</h1>
                                                              
                    </div>
                    

                    <p className="w-full mx-auto text-base text-justify text-gray-200 md:max-w-md sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
                        Sie finden uns entweder in der Kartenillustration der Freiburger Altstadt oder ganz professionell in der Karte von Street-Map !
                    </p>
                <div className="relative flex flex-col justify-center md:flex-row md:space-x-4">
                <div className='w-full mt-3 max'>
                    <Modal3></Modal3>

                    </div>
                    <div className='w-full mt-3 max'>
                    <Modal3></Modal3>

                    </div>
                   
                   
        </div>
    </div>
   {/* <div className="mb-24 container items-center max-w-sm px-5 mx-auto mt-16 text-cente border border-gray-50 shadow-2xl shadow-gray-400 lg:max-w-xl">
                        <Image src="/MapFreiburg.png" alt="Illuustration Altstadt" height="900" width="955"/>
                        <h1 className="mt-2 mb-10 text-gray-100 text-center text-2xl">Illusttration Altstadt Freiburg </h1>
    </div>*/}
                </div>       
</section>
</>

    )
    }
