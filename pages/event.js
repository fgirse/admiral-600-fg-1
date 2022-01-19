/* eslint-disable prettier/prettier */
import React from 'react';
import StyledButton from '@/components/Buttons/Button';
import StyledHeroEvent from '../components/HeroEvent';
import Heading2 from '@/components/Headings/Heading2'; 
import theme from "theme-ui-sketchy-preset";
import Image from 'next/image'
import {
  jsx,
  ThemeProvider,
  Flex,
  Box,
  NavLink,
  Button,
  Card,
  Text,
  Label,
  Checkbox,
  Select,
  Textarea,
  Radio,
  Input,
  Badge,
  Alert,
  Divider,
  Styled as S
} from "theme-ui";
                                                                                                                                                                                                                                                                                                                                                                                                                             

function event() {
    return (
        <>
<section className="px-2 py-32 bg-[#143e72] md:px-0">
  <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
    <wrapper className=" mx-auto w-[100vw] h-[100vh] bg-no repeat bg-piano bg-cover ">
    <div className='-mt-24 w-9/12 lg:w-4/12'>
                  <Image src="/LogoAlt.png" layout="responsive" alt="Logo-alt" width="1049" height="230" />
                </div>

    <div className="flex flex-wrap items-center sm:-mx-3">
      <div className="w-full md:w-1/2 md:px-3">
        <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-yellow-400 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">privater oder business Anlass?</span>
            Dein Event<span className="block text-orange-600 xl:inline"> ! </span>
          </h1>
          <p className="mx-auto text-base text-gray-400 sm:max-w-md lg:text-xl md:max-w-3xl">Wir planen gerne für Sie Ihren persönlichen Event - auf Wunsch Catering vollumfänglich möglich. Sprechen Sie uns an oder kontaktieren Sie uns per mail....</p>
          <div className="relative flex flex-col sm:flex-row sm:space-x-4">
            <a href="#_" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-yellow-600 rounded-md sm:mb-0 hover:bg-yellow-400 sm:w-auto">
              email Rettungsanker
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="#_" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
              weitere Infos
            </a>
          </div>
        </div>g
      </div>
      <div className="w-full md:w-1/2">
        <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
        <Image src="/Women_Illustration_adobespark.png" alt="" height="900" width="955"/>
          </div>
      </div>
    </div>
      
    </wrapper>
               
  </div>
</section>


        </>
        )
   }
   export default event