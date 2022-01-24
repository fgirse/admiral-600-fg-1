/* eslint-disable prettier/prettier */
import React from 'react'
import StyledHeroDrinks from '../components/HeroDrinks';
import { Heading1 } from '@/components/Headings/Heading1.styles'
import Image from 'next/image';
import  { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import Ganter from '../components/icons/svg/SVGGanter'
import Astra from '../components/icons/svg/SVGAstra'
import Flensburger from '../components/icons/svg/SVGFlensburger'
import SectionContainer from '@/components/SectionContainer';

export default function Drinks()  {
      
    
      
        return (
          <>
  
<section className='w-11/12 mx-auto bg-slate-800'>
    <section className="text-white py-24 2xl:pt-40 2xl:pb-52">
      <div className="container mx-auto px-4">
        <div className='-mt-28 mx-auto w-2/12 h-12 md:w-3/12 lg:w-3/12 xl:w-2/12'>
               <Image src="/LogoAlt.png" layout='responsive' height="250" width="980" alt="LogoAlt"></Image>
       </div>
     <div className="flex flex-wrap -mx-4">
      <div className="mt-24 w-full xl:w-1/3 2xl:w-1/3 px-4 mb-24 xl:mb-0">
        <span className="font-medium uppercase tracking-widest text-xs text-gray-300 leading-4 mb-9 block">Version 1.Januar 2022</span>
        <h2 className="font-heading font-medium text-9xl md:text-10xl xl:text-8xl leading-tight mb-8">Drinks & Snacks</h2>
        <p className="mb-16 text-darkBlueGray-300 leading-loose text-base md:max-w-sm">Alle Preise inklusive Mehrwertsteuer. Trinkgelder sind nicht enthalten. Die Preise können kurzfristig von den Angaben in der Webseite varieren</p>
        <a className="py-5 px-10 text-lg leading-6 text-white font-medium tracking-tighter font-heading bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" href="#">See all</a>
      </div>
      <div>                                                                     
        
     
          
          <div>
          <h1 className='mx-auto mt-24 text-center w-11/12 font-extrabold text-red-800 xl:text-8xl'>Biere</h1>

         
          <div className="lg:mt-20 bg-slate-700 p-4 rounded-xl mx-auto w-full h-auto bg-red grid grid-cols-[4vw,_1.6fr,_1.6fr,_1fr] gap-x-5 gap-y-5 justify-center items-cen4ter">
         
                     <Ganter width="100" height="66"></Ganter>
                      <p className="text-sm xl:text-4xl">Ganter Pils </p>
                      <p className="text-sm xl:text-4xl">0.33 Liter offen </p>
                      <p className="text-sm xl:text-4xl">3.90 Euro </p>
                      <div className=''>
                        <Astra width="100" height="66"></Astra>
                      </div>
                      <p className="text-sm xl:text-4xl">Astra Bier </p>
                      <p className="text-sm xl:text-4xl">0.33 Liter Flasche </p>
                      <p className="text-sm xl:text-4xl">3.90 Euro </p>
                      <div className=''>
                        <Flensburger width="100" height="66"></Flensburger>
                      </div>
                      <p className="text-sm md:text-md lg:text-xl xl:text-4xl">Flensburger Pils </p>
                      <p className="text-sm md:text-md lg:text-xl xl:text-4xl">0.33 Liter Flasche </p>
                      <p className="text-sm md:text-md lg:text-xl xl:text-4xl">3.90 Euro </p>
                      <Ganter width="100" height="66"></Ganter>
                      <p className="text-sm xl:text-4xl">Ganter Weizen </p>
                      <p className="text-sm xl:text-4xl">0.33 Liter offen </p>
                      <p className="text-sm xl:text-4xl">4.90 Euro </p>
                      <Ganter width="100" height="66"></Ganter>
                      <p className="text-sm xl:text-4xl">Ganter Märzen </p>
                      <p className="text-sm xl:text-4xl">0.33 Liter Flasche </p>
                      <p className="text-sm xl:text-4xl">3.90 Euro </p>
                      <Ganter width="100" height="66"></Ganter>
                      <p className="text-sm xl:text-4xl">Ganter Alkoholfrei </p>
                      <p className="text-sm xl:text-4xl">0.33 Liter Flasche </p>
                      <p className="text-sm xl:text-4xl">3.90 Euro </p>
                      <Ganter width="100" height="66"></Ganter>
                      <p className="text-sm xl:text-4xl">Ganter Radler </p>
                      <p className="text-sm xl:text-4xl">0.5 Liter offen</p>
                      <p className="text-sm xl:text-4xl">4.20 Euro </p>
                      <p className="text-sm xl:text-4xl">0.33 Liter offen </p>
                      
                      <p className="text-sm xl:text-4xl"></p>
                      <p className="text-sm xl:text-4xlp">Weinschorle</p>
                      <p className="text-sm xl:text-4xl">0.2 5Liter offen </p>
                      <p className="text-sm xl:text-4xl">4.20 Euro </p>
 
            </div>
            </div>
          </div>
        </div>
      </div>
    


</section>
</section>  

  </>)}