

import fetchPhotosByOne from "@/utils/fetchPhotosByOne";
import Image from 'next/image'
import { notFound } from "next/navigation";
// RSC



// dynamic page 에서 dynamic하게 metadata를 설정 

// export const metadata:Metadata = {
//   title: 'Triangle | Photos',

// }

// 데이터 몇개만 만들어 놓아라~ SSG

export async function generateStaticParams() {
  return [{id:'70'},{id:'71'},{id:'72'}]
}

export const dynamicParams = true
// false : 미리 만들어진 페이지 이외의 다른 페이지는 접근 불가 404 
// true(default) : 블로킹 폴백 -> 없으면 만들어줌 있으면 사용함


export async function generateMetadata({params}:{params:Promise<{id:string}>}){
  const { id } = await params;

  return {
    title: `Triangle | Photos-${id}`
  }
}



async function Page({params}:{params:Promise<{id:string}>}) {
  
  const { id } = await params;

  const data = await fetchPhotosByOne(id);
  
  if(!data) notFound(); // server component에서만 사용 가능 
  
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">👀 작품 자세히 보기 📷</h2>
      <h3>Image Id : {data.id}</h3>
      <Image 
        src={data.download_url} 
        alt={data.author}
        width={data.width}
        height={data.height}
        priority={data.width > 4000}
      />
      <h4>Photo by : {data.author}</h4>
      <p>
        Image URL : {' '}
        <a className="text-amber-300" href={data.url}>{data.url}</a>
      </p> 
    </div>
  );
}
export default Page;
