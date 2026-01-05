import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

function    Navbar() {
  return (
    <nav className='bg-black text-white'>
    <div className='w-4/7 mx-auto p-4 '>
        <div className='flex justify-between'>
            <div><Image src="/logo.avif" alt="logo" width={100}
      height={100}/></div>
            <div className='flex gap-4 items-center text-sm font-semibold'>
                <p>Products</p>
                <p>Pricing</p>
                <p>Blogs</p>
                <p>FAQs</p>
                <p>Careers</p>
                <Button className='rounded-full bg-white text-black hover:bg-black hover:text-white'>Talk to Founder</Button>
            </div>
        </div>
    </div>
    </nav>
  )
}

export default Navbar