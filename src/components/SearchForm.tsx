'use client'

import { usePathname, useRouter } from "next/navigation";

function SearchForm() {

  const router = useRouter();
  const pathname = usePathname();

  
  
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const input = e.currentTarget.querySelector<HTMLInputElement>('#search')!;
    const keyword = input.value.trim();
    
    router.push(`${pathname}?q=${keyword}`);
    
  }


  return (
     <form onSubmit={handleSubmit} className="border border-gray-600 p-2 m-4 rounded flex justify-center">
      <label>
        <input 
          className="border border-amber-50 rounded indent-2"
          id="search"
          type="search" 
        />
      </label>
      <button 
        className="bg-blue-500 px-2 py-0.5 ml-2 rounded font-bold"
        type="submit"
      >검색</button>
    </form>
  )
}
export default SearchForm