import fetchPhotos from "@/utils/fetchPhotos"
import { Metadata } from "next"
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { delay } from "@/utils/delay";




export const metadata:Metadata = {
  title:'Triangle | Photos'
}


// export const dynamic = 'force-static'

async function Page() {

  
  const data = await fetchPhotos({cache:'force-cache'});

  // const data = await fetchPhotos({cache:'no-store'});

  if(!data) notFound()


  await delay()

  return (
    <div>
      <ul className="grid grid-cols-2 gap-4 p-4">
        {
          data.map(({id, download_url, author, width})=>(
            <li key={id} className="mb-4">
              <Link href={`photos/${id}`}>
                <Image 
                  src={download_url} 
                  alt={author} 
                  width={300}
                  height={300}
                  style={{height:'100%'}}
                  priority={width > 4000}
                />
              </Link>
              <span>작가 : {author} </span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
export default Page