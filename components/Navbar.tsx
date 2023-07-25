import Image from 'next/image'
import Link from 'next/link'

import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className=' w-full absolute z-10'>
      <nav className=' max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link href="/" className=' flex justify-center items-center'>
                {/* <Image 
                src="/logo.svg"
                alt="Car hub logo"
                width={118}
                height={18}
                className=' object-contain'
                /> */}
                <h1 className="font-sans tracking-wide text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green to-green via-green">GreenEnergy</h1>
            </Link>
            {/* <CustomButton
            title="Sign In"
            btnType="button"
            containerStyles=' text-primary-blue rounded-full bg-white min-w-[130px] hover:bg-blue-200 hover:text-black'
            /> */}
      </nav>
    </header>
  )
}

export default Navbar
