import siteMetadata from '@/data/siteMetadata'
import Logo from '@/data/SvgLogoNeu'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Image from 'next/image'
import Phone from'../components/icons/svg/phoneillustra';
const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
         <div className="flex flex-col justify-between bg-gray-900 h-screen">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label="Tailwind CSS Blog">
              <div className="flex items-center justify-between">
                <div className="mr-3 xl-w-36">
                  <Logo />
                </div>
                <div flex flex-col grid-x-3 justify-start items-center >
          <div className='w-6 mr-5 xl:w-10'>
       11   <Image src="/phone-Illustration.png" layout="responsive" width="145" height="145"></Image>
          </div>
          
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="h-6 text-gray-300 text-xs xl:text-2xl font-semibold lg:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
      
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden lg:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-xl text-gray-100 hover:text-yellwow-500 sm:p-4 dark:text-gray-100 hover:border-b hover:border-yellow-500 md:text-indigo md:text-2xl lg:text-pink-400 2xl:text-1xl xl:text-green-400 xl:text-2xl 2xl:text-blue-400 2xl:text-3xl"
                >
                  {link.title} 
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
