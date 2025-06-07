import { Button, Navbar, NavbarCollapse, NavbarToggle, TextInput } from 'flowbite-react'
import React from 'react'
import { Link ,useLocation} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'


export default function Header() {
    const path=useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
      <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white ">
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>BELLA's</span>
        Blog
      </Link>
      <form>
        <TextInput
            type='text'
            placeholder='Search...'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
            <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
            <FaMoon/>
        </Button>
        <Link to='/sign-in'>
            <Button className="w-24 h-10 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="w-full h-full flex items-center justify-center transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Sign In
                </span>
            </Button>

        </Link>
        <NavbarToggle/>
      </div>
        <NavbarCollapse className='text-amber-50'>
            <Link to="/" active={path==='/'} as ={'div'}>
                Home
            </Link>
            <Link to="/about" active={path==='/about'} as ={'div'}>
                About       
            </Link>
            <Link to="//projects" active={path==='/projects'} as ={'div'}>
                Projects
            </Link>
        </NavbarCollapse>
        
    </Navbar>
  )
}
