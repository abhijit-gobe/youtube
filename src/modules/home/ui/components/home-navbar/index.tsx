import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { SidebarTrigger } from '@/components/ui/sidebar'
import { SearchInput } from './search-input'
import { AuthButton } from '@/modules/auth/ui/components/auth-button'

export const HomeNavbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 px-2 py-5 h-16 bg-white flex items-center z-50'>
      <div className="flex items-center gap-4 w-full">
        {/* Menu and logo */}
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
          <Link href="/">
            <div className='flex items-center gap-1 p-4'>
              <Image src="/logo.svg" alt="Logo" width={32} height={32} />
              <p className='text-xl font-semibold tracking-tight'>Youtube</p>
            </div>
          </Link>
        </div>
        {/* Search bar */}
        <div className="flex flex-1 justify-center max-w-[720px] mx-auto">
          <SearchInput />
        </div>
        {/* Auth button */}
        <div className='flex-shrink-0 items-center flex gap-4'>
          <AuthButton />
        </div>
      </div>
    </nav>
  )
}

