'use client'

import React, { useState } from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Menu, X } from 'lucide-react'
import { useMobile } from '@/hooks/use-mobile'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {isMobile ? (
        <>
          <button 
            onClick={toggleMenu} 
            className="p-2 focus:outline-none" 
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          {isMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md backdrop-saturate-150 border-b border-gray-200/50 dark:border-gray-800/50 p-4 flex flex-col space-y-4 shadow-lg">
              {navItems.map(({ link }, i) => (
                <div key={i} onClick={() => setIsMenuOpen(false)}>
                  <CMSLink 
                    {...link} 
                    appearance="link" 
                    className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400" 
                  />
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <nav className="flex gap-6">
          {navItems.map(({ link }, i) => (
            <CMSLink 
              key={i} 
              {...link} 
              appearance="link" 
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400" 
            />
          ))}
        </nav>
      )}
    </>
  )
}
