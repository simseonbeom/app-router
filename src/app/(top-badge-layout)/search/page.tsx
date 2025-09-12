
import SearchForm from "@/components/SearchForm"
import fetchPhotos from "@/utils/fetchPhotos";
import { Metadata } from "next"
import Image from "next/image"



export const metadata:Metadata = {
  title:'Triangle | Search'
}

/* 
  1. query 값을 가져옵니다.
    - props 조회
  2. 모든 photos의 데이터를 fetching
  3. keyword를 가지고 filter
  4. render
*/





async function Page({searchParams}:{searchParams:Promise<{q?:string}>}) {
  

  const { q } = await searchParams;
  
  const data = await fetchPhotos();

  const results = q ? data.filter( p => p.author.toLowerCase().includes(q.toLowerCase())) : []
  

  return (
    <div>
     <SearchForm />
     {
      q && (
        <p>
          <b>{q}</b> 검색결과 : {results.length} 건
        </p>
      )
     }
     <ul>
      {
        results.map((p)=> (
          <li key={p.id}>
            <Image src={p.download_url} alt={p.author} width={400} height={300}/>
            <span>Photo by {p.author}</span>
          </li>
        ))
      }
     </ul>
    </div>
  )
}
export default Page