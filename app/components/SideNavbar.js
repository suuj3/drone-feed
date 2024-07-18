// components/SideNavbar.js
'use client';

import { Disclosure } from '@headlessui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineDashboard, MdOutlineSettings, MdOutlinePowerSettingsNew } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; // Correct import for App Router

function SideNavbar() {
  const router = useRouter();

  return (
    <Disclosure as="nav">
      <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
        <GiHamburgerMenu className="block md:hidden h-6 w-6" aria-hidden="true" />
      </Disclosure.Button>
      <div className="p-6 w-60 h-screen bg-white z-20 fixed top-0 -left-60 lg:left-0 lg:w-60 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
        <div className="flex flex-col justify-start item-center">
          <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
            Dashboard
          </h1>
          <div className="my-4 border-b border-gray-100 pb-4">
            <div
              onClick={() => router.push('/')}
              className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
            >
              <MdOutlineDashboard className="text-2xl text-gray-600 group-hover:text-white" />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                Dashboard
              </h3>
            </div>
            <div
              onClick={() => router.push('/locations')}
              className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
            >
              <FaMapMarkerAlt className="text-2xl text-gray-600 group-hover:text-white" />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                Locations
              </h3>
            </div>
          </div>
          <div className="my-4 border-b border-gray-100 pb-4">
            <div
              onClick={() => router.push('/settings')}
              className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
            >
              <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white" />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                Settings
              </h3>
            </div>
          </div>
          <div className="my-4">
            <div
              onClick={() => router.push('/logout')}
              className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
            >
              <MdOutlinePowerSettingsNew className="text-2xl text-gray-600 group-hover:text-white" />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                <button>
                  Log Out
                </button>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}

export default SideNavbar;
