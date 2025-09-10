import { navItems } from "@/utils/navigation"
import Link from "next/link"



function Header() {


  return (
    <header className="bg-white py-2 text-slate-600 flex px-4 justify-between">
      <h1>👼</h1>
      <nav>
        <h2 className="sr-only">메인 메뉴</h2>
        <ul className="flex gap-4">
          {
            navItems.map(({href,label})=>(
              <li key={href}>
                <Link href={href}>
                  {label}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}
export default Header