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
      
  
      const [tabelleBL, setTabelleBL] = useState([])
  


      const Token = '41c4813ea4f746fbbdd2bdb9c5250aa4';
      const Url = 'https://api.football-data.org/v2/competitions/2002/standings?';
      const url2 = (Url, { headers: { 'X-Auth-Token': Token }})
      const url3 = "https://api.randomuser.me/";
      const url4 = "https://api.football-data.org/v2/competitions/2002/standings?X-Auth-Token=41c4813ea4f746fbbdd2bdb9c5250aa4"



        
      
        return (
          <>


          
<StyledHeroDrinks>
   

<table class="table-auto bg-gray-800opacity-50 text-gray-300 text-4xl">
  <thead>
    <tr>
      <th>Logo</th>
      <th>Getränk</th>
      <th>Menge</th>
      <th>Preis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><Ganter height="225" widthlllllllllllll1></Ganter></td>
      <td>GanterBier</td>
      <td>033.dl offen</td>
      <td>03.90Eur</td>
    </tr>
    <tr>
    <td>1961</td>
      <td><Astra></Astra>)</td>
      <td>03.90 Eur</td>
      <td>Astra0.33dl Flasche</td>
      <td>03.90 Eur</td>
    </tr>.90
    <tr>
    <td>1961</td>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Flensburger</td>
      <td>4.10 Eur</td>
    </tr>
  </tbody>
</table>


          
                 
</StyledHeroDrinks>
          
          </>)}