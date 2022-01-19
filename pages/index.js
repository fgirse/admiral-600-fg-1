
import StyledButton from '@/components/Buttons/Button';
import Flensburger from '../components/icons/svg/SVGFlensburger';
import Ganter from '../components/icons/svg/SVGGanter';
import Astra from '../components/icons/svg/SVGAstra';
import { Heading0 } from '../components/Headings/Heading0.styles';
import { Heading1 } from '../components/Headings/Heading1.styles';
import { Heading2 } from '../components/Headings/Heading2.styles';
import { Heading3 } from '../components/Headings/Heading3.styles';
import Popup from '../components/popup'
import Image from 'next/image';
import sketchy from "theme-ui-sketchy-preset"; 

import {
  jsx,
  Flex,
  Box,
  NavLink,
  ThemeProvider,
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


const theme = {
  ...sketchy,
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#33e",
  },

}
export default function Home() {

  return (
    <>

 <section className='W-12/12'>
  
   <div className="border-t border-b border-yellow-400 bg-logo h-[75vh] w-full bg-contain bg-no-repeat w-full lg:h-[vh] lg:bg-no-repeat lg:bg-100/66 lg:bg-hero">
    
    
  
  {/*<{/Heading3 classNames="w-8 text-1xl text-orange-300 md:text-2xl lg:text-4xl xl:text-5xl">Dein Treffpunkt in Freiburrg!!!</Heading3>*/}
</div>


   
                 
                 </section>


{/*======================================================================= SDCTION A ===========================================================*/}
mt<section className='-mt-[47vh] md:mx-auto md:mt-36 lg:-mt-36 xl:mt-1 w-11/12 '>


<div className="mt-4 flex flex-wrap -mx-4 -mb-4 md:mb-0 md:gap-x-5 lg:gap-x-36">
  {/*==================================================================================================================================*/}
  <div className=" w-full md:w-3/12 px-4 mb-4 md:mb-0 lg:p-2">
  
                <p className="text-center text-3xl md:p-3 md:text-row md:text-8xl lg:text-5xl xl:text-5xl font-bold uppercase text-yellow-500">öffnungszeiten</p>
                <p className="text-center mt-2 text-1xl md:text-5xl  text-gray-300 lg:text-xl xl:text-4xl">Montag bis Donnerstag: 18 bis 24 Uhr</p>
                <p className="text-center text-1xl md:text-5xl  text-gray-300 lg:text-xl xl:text-4xl">Freitag und Samstag: 15 bis 03 Uhr</p>
                <p className="text-center text-2xl md:text-5xl  text-gray-300 lg:text-2xl xl:text-4xl">Sonntag: Ruhetag</p>
  </div>
  {/*==================================================================================================================================*/}
  



          {/*==================================================================================================================================*/}


  <div classNamemt="w-9/12 mx-auto md:w-9/12 px-20 mb-4 md:mb-0">
              <div  className="mt-5 mx-auto ml-10 bg-red-900 h-full flex flex-col justify-center items-center rounded-lg border shadow-xl shadow-gray-500/40 md:flex-row md:max-w-6xl lg:bg-red-800 xl:bg-red-900 xl:max-w-5xl xl:11/12 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                           <div className="xl:w-[70vw] xl:h-full xl:mt-48 xl:ml-5">
                             
                                  
                           <img className="mt-5 md:-mt-16 px-2 object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="portrait-mick1.png" alt="PortraitMick"/>
                           </div>
                  <div className=" flex flex-col float-left justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-4xl xl:text-6xl xl:mt-5 font-bold tracking-tight text-yellow-600 dark:text-white">"Moin - Moin"</h5>
                            <p className="z-30 text-xl lg:text-2xl xl:text-2xl font-normal text-gray-100 dark:text-gray-400">In Hommage an eine typische Kiez-Kneipe auf St.Pauli, haben wir im Herzen von Freiburg ein Lokal eröffnet, welches es so südlich der Elbe wohl kein zweites Mal gibt. Ausgebaut im Stile eines Schiffrumpfes, ist der im Herzen der Altstadt gelegene Rettungsanker-Freiburg idealer Treffpunkt um nach Feierabend nette und interessante Menschen kennenzulernen. Wir sind stolz auf unser buntes, internationales Publikum. Unser Rettungsanker ist auch ideale Location zur Durchführung Ihres privaten oder geschäftlichen Events. Sprechen Sie uns an oder kontaktieren Sie uns vor Ort oder schreiben Sie uns eine email. Wir freuen uns Sie im Rettungsanker begrüsssen zu dürfen <br /><br />Michael Schreck und das Team des Rettungsanker.</p>
                  </div>
            </div>

  </div>

  

</div>

</section>
{/*========================== ENDE SECTION A ===================================================*/}
 
<Heading2 className='mx-auto z-20 ml-36 mt-12 md:mt-0 md:mr-0'>Die Kneipe</Heading2> 
       <div className='right-3 transform -translate-y-20 absolute md:w-6/12 md:right-16 lg:w-2/12 xl:w-4/12 float-right md:transform md:-translate-y-48 xl:transforn z-20 xl:-translate-y-[60vh]' >
        <Image className='absolute' src="/Astraballons.png" alt="portrait" layout="responsive" height={2064} width={1739} />
      </div>
   
      <div className='w-7/12 transform -translate-y-60 md:w-2/12 xl:transform xl:w-4xl:-translate-y-[50vh]'>
        <Image src="/lighthousebw.svg" alt="illustration" layout="responsive" height={473} width={473} />
      </div>
      {/*{<h1 className="text-center text-yellow-400 text-7xl md:hidden">Die Kneipe</h<div className=' absolute w-6/12 left-0 top-80  md:2/12 md:transform:-translate-y-48 xl:transform xl:-translate-y-[56vh]' >
        <Image src="/rettungsring.png" alt="illustration" layout="responsive" height={473} width={473} />
      </div>
      <div className=' transform -translate-y-6 absolute w-4/12  md:transform:-translate-y-24 lg:transform lg:-transform: lg:translate-y-60' >
        <Image src="/" alt="illustration" layout="responsive" height={473} width={473} />
      </div>

      <section className='-mt-72 ml-5 md:mt-20 mx=auto w-11/12 lg:mt-36 xl:-mt-[50vh]'>
        <ThemeProvider theme={theme}>
          <div className="mx-auto grid grid-cols-1 gap-3 justify-center items-center p-2 ml-2 mt-24 md:grid lg:ml-36 xl:ml-60 lg:grid-cols-3 lg:justify-around lg:items-center lg:gap-16" >

          <Card
              mb={3}
              mt={20}
              sx={{
                maxWidth: 700,
                padding: "12px",
                color: "#ffffff",
                backgroundColor: "orange",
                border: "3px white solid",
                boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
              }} onGotPointerCapture={2}
            >
              <div className='border- border-gray-100'>
                <Astra height="24vh" width="vw"></Astra>
              </div>
              <Text>
                <p className="mt-10 text-3xl text-center text uppercase font-bold" >Astra Bier</p>
                <p className="text-xl text-center">natürlich direkt vom Kiez in den Anker</p>
              </Text>
            </Card>

            <Card
              mb={3}
              mt={20}
              sx={{
                maxWidth: 700,
                padding: "12px",
                color: "#ffffff",
                backgroundColor: "orange",
                border: "3px white solid",
                boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
              }} onGotPointerCapture={2}
            >
              <div className='border- border-gray-100'>
                <Ganter height="24vh" width="vw"></Ganter>
              </div>
              <Text>
                <p className="mt-10 text-3xl text-center text uppercase font-bold" >Ganter Bier</p>
                <p className="text-xl text-center">frisches Ganter-Bräu vom Fass</p>
              </Text>
            </Card>
            <Card
              mb={3}
              mt={20}
              sx={{
                maxWidth: 700,
                padding: "12px",
                color: "#ffffff",
                backgroundColor: "orange",
                border: "3px white solid",
                boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
              }} onGotPointerCapture={2}
            >
              <div className='border- border-gray-100'>
                <Flensburger height="24vh" width="vw"></Flensburger>
              </div>
              <Text>
                <p className="mt-10 text-3xl text-center text uppercase font-bold">Flensburger</p>
                <p className="text-xl text-center">das blonde Herbe aus dem hohen Norden</p>
              </Text>
            </Card>
          </div>
        </ThemeProvider>

      </section>
     
      <Heading0 className="mt-2 lg: ">Impressionen Rettungsanker</Heading0>
      {/*<h1 className="text-center text-yellow-400 text-5xl md:hidden">Impressionen Rettungsanker</h1>*/}
      <div className='w-6/12 lg:w-2/12 absolute lg:transform lg:-translate-y-36 xl:transform xl-translate-y-24'>
        <Image src="/Albers_Illu_white.png" top-5 alt="Impressionen" height="208 " width="195" layout="responsive" />
      </div>                                                            


      <section className='ml-2 mx=auto w-11/12'>
        <ThemeProvider theme={theme}>
          <div className="mt-48 ml-3 px-1 mx-center grid-cols-1 justify-center items-center md:ml-24 md:grid md:grid-cols-3 md:gap-1 md:justify-center md:items-center lg:gap-10 lg:ml-36 xl:mt-48" >

            
          <Card 
            mb={5}
              mt={20}
              sx={{
                maxWidth: 700,
                padding: "10px",
                color: "#ffffff",
                backgroundColor: "orange",
                border: "3px white solid",
                boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
              }} onGotPointerCapture={2}
            >
              <div className='border-8 border-gray-100'>
                <Image src="/Impress01.jpg" alt="Impressionen" height="168 " width="300" layout="responsive" />
              </div>
              <Text>
              <p className="mt- text-center font-bold text-5xl md:text-4xl ">Impressionen</p>
              </Text>
            </Card>

            <Card 
            mb={5}
              mt={20}
              sx={{
                maxWidth: 700,
                padding: "10px",
                color: "#ffffff",
                backgroundColor: "orange",
                border: "3px white solid",
                boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
              }} onGotPointerCapture={2}
            >
              <div className='border-8 border-gray-100'>
                <Image src="/Impress02.jpg" alt="Impressionen" height="168 " width="300" layout="responsive" />
              </div>
              <Text>
              <p className="mt- text-center font-bold text-5xl md:text-4xl ">Impressionen</p>
              </Text>
            </Card>

            
            <Card 
            mb={5}
              mt={20}
              sx={{
                maxWidth: 700,
                padding: "10px",
                color: "#ffffff",
                backgroundColor: "orange",
                border: "3px white solid",
                boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
              }} onGotPointerCapture={2}
            >
              <div className='border-8 border-gray-100'>
                <Image src="/Impress03.jpg" alt="Impressionen" height="168 " width="300" layout="responsive" />
              </div>
              <Text>
              <p className="mt- text-center font-bold text-5xl ">Impressionen</p>
              </Text>
            </Card>
          </div>
        </ThemeProvider>

      </section>

      <section className=''>
        <div>

          <hr className='w-48 mt-12 mx-auto md:w-9/12'/>
                
          <div className="w-36 mt-6 md:mt-24 mx-auto md:w-2/12">
          <Image  src="/Logo_neu.png" alt="LogoNeu" layout="responsive" height="1060" width="1920"/>
          </div>
                <Heading1 className="hidden md:block md:mt-12 lg:-mt-12">Impressum</Heading1>
                <h1 className=' text-6xl text-center text-yellow-400 font-bold md:hidden' >Impressum</h1>
                  <div>
            <div className="mt-12 flex flex-col items-center justify-between">
                <h1 className='mx-auto w-9/12 md:text-4xl text-gray-100 text-center'>Rettungsanker Freiburg GbR</h1>
                  <h1 className='mx-auto w-9/12 md:text-3xl text-gray-100 text-center'>Adelhauserstrasse 7c</h1>
                  <h1 className='mx-auto w-9/12 md:text-3xl text-gray-100 text-center'>79098 Freiburg / Breisgau</h1>
            </div>

            <div class Name="mt-12">
              <h1 className='mt-5 mx-auto w-9/12 font-mono md:text-2xl text-yellow-400 text-center'>Geschäftsführung:</h1>
              <h1 className='mx-auto w-9/12 md:text-3xl text-gray-100 text-center'>Michael Schreck</h1>
            </div>


            <div class Name="mt-12">
              <h1 className='mt-5 mx-auto w-9/12 font-mono md:text-2xl text-yellow-400 text-center'>Steuernummer:</h1>
              <h1 className='mx-auto w-9/12 md:text-3xl text-gray-100 text-center'>1234567890</h1>
            </div>
m
            <div class Name="mt-12">
              <h1 className='mt-5 mx-auto w-9/12 font-mono md:text-2xl text-yellow-400 text-center'>Gerichtsstand:</h1>
              <h1 className='mb-10 mx-auto w-9/12 md:text-3xl text-gray-100 text-center'>Freiburg/ Breisgau</h1>
            </div>
        </div>

        </div>
        
      </section>
      
    


</>
  )
   async function getStaticProps() {
    const posts = await getAllFilesFrontMatter('blog')
  
    return { props: { posts } }
    
  }
  
}
