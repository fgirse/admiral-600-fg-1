import React from 'react'
import StyledHeroWohin from '../components/HeroWohin';
import Heading1 from '@/components/Headings/Heading2'; 
import Image from 'next/image';
import SVGOev from '../components/icons/svg/SVGOeV' 
import Modal from '../components/Modal'
export default function Kontact()  {

    return(
    <>
    
    
{/* Section 1 */}

<section class="-mt-36px-2 pt-32 bg-bluegray-900 md:px-0">
<div className="-mt-52  container items-center max-w-6xl px-8 mx-auto xl:px-5">
<div className='mt-24 mx-auto w-10/12'>
<Image className="mt-24" src="/LogoAlt.png" layout="responsive" alt="Logo alt" height="280" width="1049"  />
</div>

<Heading1 className="hidden lg; block lg;w-11/12 lg:mx-auto">WOHIN?</Heading1>
<h1 className='mt-1 text-center text-yellow-600 text-7xl md:text-6xl lg:hidden'>WOHIN?</h1>
    <div class="mt-12 container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
    <h1 className="text-4xl font-extrabold tracking-tight text-left text-gray-300 sm:text-5xl md:text-6xl md:text-center">
                    <span className="block">LAGEPLAN <span class="block mt-1 text-yellow-400 lg:inline lg:mt-0">Rettungsanker Freiburg</span></span>
                    </h1>
                    <p className="w-full mx-auto text-base text-justify text-white [ -webkit-text-stroke-width: .15rem;]  md:max-w-md sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
                    Adelhauserstrasse 7c<br/>79098 Freiburg im Breisgau<br/>öffentlicher Nahverkehr: 
                    </p>
                    <div className="flex flex-col  jtems-center">
                    <SVGOev height="5vh" width="5vw"></SVGOev>
                     <h1 className='text-3xl  text-orange-300'>Holzmarkt</h1>
                     <h1 className='text-3xl  text-orange-300'>Linie 1 3 und 5</h1>
                                                                   
                    
                    </div>
                    

                    <p className="w-full mx-auto text-base text-justify text-gray-200 md:max-w-md sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
                        Sie finden uns entweder in der Kartenillustration der Freiburger Altstadt oder ganz professionell in der Karte von Street-Map !
                    </p>
                <div className="relative flex flex-col justify-center md:flex-row md:space-x-4">
                    <a href="#_" class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-orange-300 rounded-md md:mb-0 hover:bg-orange-700 md:w-auto">
                        Kartenillustration  
                    </a>
                    <a href="#_" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-400 hover:text-gray-600">
                        Open Street MAP
                    </a>
        </div>
    </div>
    <div className="mb-24 container items-center max-w-4xl px-5 mx-auto mt-16 text-cente border border-gray-50 shadow-2xl shadow-gray-400">
                        <Image src="/MapFreiburg.png" alt="Illuustration Altstadt" height="900" width="955"/>
                        <h1 className="mt-2 mb-10 text-gray-100 text-center text-2xl">Illusttration Altstadt Freiburg </h1>
                </div>
                </div>       
</section>
</>

    )
    }
