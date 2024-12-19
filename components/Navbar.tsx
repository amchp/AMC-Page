'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">AMC</Link>
        <ul className="flex space-x-4">
          <NavItem href="/" label="Home" isActive={pathname === '/'} />
          <NavItem href="/projects" label="Projects" isActive={pathname.startsWith('/projects')} />
          <NavItem href="/education" label="Education" isActive={pathname === '/education'} />
          <NavItem href="/experience" label="Experience" isActive={pathname.startsWith('/experience')} />
        </ul>
      </div>
    </nav>
  )
}

function NavItem({ href, label, isActive }: { href: string; label: string; isActive: boolean }) {
  return (
    <li>
      <Link 
        href={href} 
        className={`transition-colors duration-200 ${
          isActive ? 'text-blue-400' : 'hover:text-blue-400'
        }`}
      >
        {label}
      </Link>
    </li>
  )
}


