import StyledButton from '@/components/Buttons/Button';
import Flensburger from '../components/icons/svg/SVGFlensburger';
import Ganter from '../components/icons/svg/SVGGanter';
import Astra from '../components/icons/svg/SVGAstra';
import Skyline from "../components/icons/svg/SVGskyline"
import Image from 'next/image';
import sketchy from "theme-ui-sketchy-preset"; 
import { PhoneIcon } from '@heroicons/react/solid';
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

 <section className='container w-12/12 p-3 mx-auto lg:w-11/12'>
   <div className='flex justify-start items-center md:hidden'>
   
     <div className=''>
      <PhoneIcon className="mb- text-yellow-400 w-6 h-6"></PhoneIcon>
    </div>
    <p className='text-xs text-gray-300'>0761 38386747</p>   
     
   </div>

    <div className='w-full lg:hidden'>
                          <Image src="/LogoAlt.png" alt="Logo alt" layout="responsive" height="130" width="916"/>
    </div>
    <div style={{"background-image": "url('/Hero.png')"}} className="hidden lg:block lg:bg-contain bg-center mx-auto border-t border-b border-yellow-400  w-full  lg:h-[66vh] lg:bg-100/66 l">
  </div>
<div style={{"background-image": "url('hero2.png')"}} className="bg-[length:100vw_50vh] -mt-3 mx-auto bg-no-repeat h-[70vh] lg:hidden">
  </div>
    
  </section>
  <div className="hidden lg:block bg-yellow-500 w-11/12 mx-auto "> 
  <Skyline width="100%" height="14vh"></Skyline>
 </div>

<div className="mx-auto w-11/12 h-36">
<h1 className="hidden lg:block p-2 text-center headingD absolute w-11/12 top-[-vh] text-3xl text-white xl:text-6xl font-bold">Dein Treffpunkt in Freiburg !!!</h1>
</div>
 
{/*======================================================================= SDCTION A ===========================================================*/}
<section className='-mt-[38vh]'>
<div className='w-full mx-auto flex flex-col items-center justify-center lg:flex-row justify-around items-center bg-red-500'>

<div className="p-6 max-w-sm bg-gray-800 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className='' >
        <p className="mb-2 text-2xl font-bold tracking-tight text-yellow-500 dark:text-white uppercase">öfffnungzeiten</p>
        <p className="text-center mt-2 text-sm sm:text-2xl md:text-xl  text-gray-300 lg:text-l xl:text-base">Montag bis Donnerstag: 18 bis 24 Uhr</p>
                <p className="text-center text-1xl sm:text-2xl md:text-5xl  text-gray-300 lg:text-xl xl:text-base">Freitag und Samstag: 15 bis 03 Uhr</p>
                <p className=" mb-7 text-center text-2xl md:text-5xl  text-gray-300 lg:text-2xl xl:text-xl">Sonntag: Ruhetag</p>
    </div>
        
    
</div>
<div>
<div className='hidden lg:block'>
          <a href="#" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/portrait-mick1.png" alt=""/>
              <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-yellow-500 dark:text-white">"Moin Moin"</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">In Hommage an eine typische Kiez-Kneipe auf St.Pauli, haben wir im Herzen von Freiburg ein Lokal eröffnet, welches es so südlich der Elbe wohl kein zweites Mal gibt. Ausgebaut im Stile eines Schiffrumpfes, ist der im Herzen der Altstadt gelegene Rettungsanker-Freiburg idealer Treffpunkt um nach Feierabend nette und interessante Menschen kennenzulernen. Wir sind stolz auf unser buntes, internationales Publikum. Unser Rettungsanker ist auch ideale Location zur Durchführung Ihres privaten oder geschäftlichen Events. Sprechen Sie uns an oder kontaktieren Sie uns vor Ort oder schreiben Sie uns eine email. Wir freuen uns Sie im Rettungsanker begrüsssen zu dürfen <br /><br />Michael Schreck und das Team des Rettungsanker.</p>
              </div>
          </a>
</div>


<div className='w-full lg:hidden'>
<div class="max-w-sm bg-red-900 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    
        <img className="rounded-t-lg" src="/portrait-mick1.png" alt="" />
    
    <div className="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-yellow-500ext-white">Moin Moin</h5>
        </a>
      <p className="mb-3 font-normal text-gray-100 dark:text-gray-400">In Hommage an eine typische Kiez-Kneipe auf St.Pauli, haben wir im Herzen von Freiburg ein Lokal eröffnet, welches es so südlich der Elbe wohl kein zweites Mal gibt. Ausgebaut im Stile eines Schiffrumpfes, ist der im Herzen der Altstadt gelegene Rettungsanker-Freiburg idealer Treffpunkt um nach Feierabend nette und interessante Menschen kennenzulernen. Wir sind stolz auf unser buntes, internationales Publikum. Unser Rettungsanker ist auch ideale Location zur Durchführung Ihres privaten oder geschäftlichen Events. Sprechen Sie uns an oder kontaktieren Sie uns vor Ort oder schreiben Sie uns eine email. Wir freuen uns Sie im Rettungsanker begrüsssen zu dürfen <br /><br />Michael Schreck und das Team des Rettungsanker.                                                                                                       .</p>
        <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
</div>
</div>
















</div>
</section>
{/*========================== ENDE SECTION A ===================================================*/}
 
<h1 className='headingB relative mt-28 left-1 z-50 text-[4rem] text-yellow-500 text-center lg:headingA   a lg:text-[10rem]'>Die Kneipe</h1>
       <div className='w-5/12 absolute right-7 transform -translate-y-8 md:w-6/12 md:right-16 lg:w-3/12 xl:w-3/12 float-right md:transform md:-translate-y-48 xl:transforn z-20 xl:-translate-y-[60vh]' >
        <Image className='absolute' src="/Astraballons.png" alt="astraballons" layout="responsive" height={2064} width={1739} />
      </div>
   
      <div className='w-7/12 z-10 md:absolute -left-8  transform -translate-y-96 md:w-5/12 xl:w-4/12 xl:transform:-translate-y-[80vh]'>
        <Image src="/lighthousebw.svg" alt="illustration" layout="responsive" height={473} width={473} />
      </div>
      
      <div className='absolute w-2/4 left-5  md:2/12 transform -translate-y-48 md:transform:-translate-y-96 lg:w-2/12 xl:transform xl:-translate-y-[35vh]' >
        <Image src="/rettungsring.png" alt="illustration" layout="responsive" height={473} width={473} />
      </div>
      <div className=' transform -translate-y-24 right-8 absolute w-5/12  md:transform:-translate-y-24 lg:transform lg:-transform: lg:translate-y-96' >
        <Image src="/Graffity_StPauli.png" alt="llustration" layout="responsive" height={473} width={473} />
      </div>

      <section className='-mt-16 ml-3 md:-mt-[40vh] md: mx=auto w-11/12 lg:mt-60 xl:-mt-[45vh]'>
        <ThemeProvider theme={theme}>
          <div className="mx-auto grid grid-cols-1 gap-1 justify-center items-center p-2 md:p-6 place-content-center mt-24 md:grid lg:mt-96 lg:ml-24 xl:ml-24 lg:grid-cols1-3 lg:justify-around lg:item11s-center lg:gap-16" >

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
              <div className='mx-auto border- border-gray-100'>
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
              <div className='mx-auto border- border-gray-100'>
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
              <div className='mx-auto border- border-gray-100'>
                <Flensburger height="24vh" width="vw"></Flensburger>
              </div>
              <Text>
                <p className="mt-10 text-2xl text-center text uppercase font-bold">Flensburger</p>
                <p className="text-xl text-center">das blonde Herbe aus dem hohen Norden</p>
              </Text>
            </Card>
          </div>
        </ThemeProvider>

      </section>

      <h1 className='z-20 relative headingB mt-10 text-[2rem] text-center text-gray-50 lg:headingA lg:text-yellow-500 lg:text-[6em] lg:mt-96'>Impressionen Rettungsanker</h1>
        <div className='-mt-36 w-3/12 lg:w-2/12 lg:p-8 absolute lg:transform lg:-translate-y-36 xl:transform xl-translate-y-24'>
        <Image src="/Albers_Illu_white.png" top-5 alt="Impressionen" height="208 " width="195" layout="responsive" />
      </div>                                    
     



      <section className='-mt-36 ml-2 mx=auto w-11/12'>
        <ThemeProvider theme={theme}>
          <div className="place-content-center mt-48 ml-3 px-1 mx-center grid-cols-1 justify-center items-center md:ml-24 md:grid md:grid-cols-3 md:gap-1 md:justify-center md:items-center lg:gap-10 lg:ml-36 xl:mt-24" >

            
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
              <p className="mt- text-center font-bold text-3xl md:text-4xl ">Impressionen</p>
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
              <p className="mt- text-center font-bold text-3xl md:text-4xl ">Impressionen</p>
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
              <p className="mt- text-center font-bold text-3xl md:4xl ">Impressionen</p>
              </Text>
            </Card>
          </div>
        </ThemeProvider>

      </section>

      <section className=''>
        <div>

          <hr className='w-48 mt-12 mx-auto md:w-9/12'/>
                
          <div className="w-36 mt-6 md:mt-20 mx-auto md:w-2/12 lg:m">
          <Image  src="/LogoNeu.png" alt="LogoNeu" layout="responsive" height="1060" width="1920"/>
          </div>
                
          <h1 className='headingB text-white mt-2 text-[3rem] text-center lg:headingA lg:text-[10rem] lg:text-gray-600'>Impressum</h1>
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
