import { Metadata } from "next"
import Link from "next/link"


export const metadata:Metadata = {
  title:'Triangle | Login'
}



function Page() {
  return (
    <div className="p-5">
      <h2>Login Page</h2>
      <Link 
      className="bg-blue-500 px-4 py-2 ml-3 rounded font-bold"
        href="/register"
      >회원가입</Link>  
    </div>
  )
}
export default Page