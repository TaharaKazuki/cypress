import React from 'react'
import Image from 'next/image'
import { SearchIcon, PlusCircleIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

const Header = () => {
  return (
    <div className="flex max-w-6xl items-center justify-between">
      <div className="relative hidden h-24 w-24 cursor-pointer lg:inline-grid">
        <Image
          src="https://fontmeme.com/permalink/221007/5e91c376f90ff4cdd6b64f3c9b91b945.png"
          layout="fill"
          className="object-contain"
          alt="tahastagram"
        />
      </div>
      <div className="relative h-24 w-10 cursor-pointer lg:hidden">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
          layout="fill"
          className="object-contain"
          alt="logo"
        />
      </div>

      <div className="relative mt-1">
        <div className="absolute top-2 left-2">
          <SearchIcon className="h-5 text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="rounded-md border-gray-500 bg-gray-50 pl-10 text-sm focus:border-black focus:ring-black"
        />
      </div>

      <h1>Right sides</h1>
    </div>
  )
}

export default Header
