import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from "/src/assets/download.png"
import profile from "/src/assets/images.jpeg"
import { Link } from 'react-router-dom'
import useLoginStore from '../../utils/useLoginStore'
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Users', href: '/users' },

]

export default function Navbar() {
    const {user,logout}=useLoginStore();
   
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src={logo} alt="" />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
            <Link  to="/" className="text-sm font-semibold leading-6 text-gray-900">
              Home
            </Link>
            <Link  to="/users" className="text-sm font-semibold leading-6 text-gray-900">
              Users
            </Link>
        </div>
        <div className='flex-1 flex items-center justify-end gap-x-2 '>
            <img src={profile} alt="profile"  className='w-10 h-10 '/>
        {
            user ? (
                <div>
                    <h1 className='font-bold'>{user.name}</h1>
                    <button className='cursor-pointer text-blue-600' onClick={logout}>Log Out</button>
                    </div>
        ) : (

        <div className="flex flex-1 items-center justify-end gap-x-6">
          <Link to="/login" className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900">
            Log in
          </Link>
          <Link
            to="/signup"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign up
          </Link>
        </div>
            )
        }

        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center gap-x-6">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <a
              href="#"
              className="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              <Link  to="/" className="text-sm font-semibold leading-6 text-gray-900">
              Home
            </Link>
            <Link  to="/users" className="text-sm font-semibold leading-6 text-gray-900">
              Users
            </Link>
              </div>
              <div className="py-6">
                <Link to="/login"  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  <button>Log in</button>
               

                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
