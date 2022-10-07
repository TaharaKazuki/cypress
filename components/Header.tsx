import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="flex max-w-6xl items-center justify-between">
      <div className="relative hidden h-24 w-24 cursor-pointer lg:inline-grid">
        <Image
          src="https://fontmeme.com/temporary/caa6aab112937f05a3ffde3c78dbb602.png"
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
      <h1>Right sides</h1>
    </div>
  )
}

export default Header
