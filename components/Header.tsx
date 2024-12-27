import React from 'react'
import { ModeToggle } from '@/components/ModeToggle'
import { CrownIcon } from 'lucide-react'


function Header() {
    return (
        <header className='flex items-center justify-between py-2 px-4 border-b border-forground  '>
            <CrownIcon className='h-6 w-6' />

            <ModeToggle />
        </header>
    )
}

export default Header