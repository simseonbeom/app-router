'use client'

import { navItems } from "@/utils/navigation"
import Link from "next/link"
// import { useEffect } from "react"
import { usePathname } from "next/navigation"



function Header() {

  const pathname = usePathname();

  return (
    <header className="bg-white py-2 text-slate-600 flex px-4 justify-between">
      <h1>
        <Link href="/">👼</Link>
      </h1>
      <nav>
        <h2 className="sr-only">메인 메뉴</h2>
        <ul className="flex gap-4">
          {
            navItems.map(({href,label})=>(
              <li key={href}>
                <Link 
                  href={href} 
                  className={pathname === href ? 'text-red-500' : ''}>{label}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}
export default Header