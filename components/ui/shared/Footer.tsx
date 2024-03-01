import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex  flex-col gap-4 text-center p-5 sm:flex-row'>
        <Link href='/'>
          <Image
          src='/assets/images/logo.svg'
          alt='logo'
          width={128}
          height={38} />
        </Link>
        <p>
          2024 Xollege. All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
