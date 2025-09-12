
/* 

Next.js(app router)는 서버에서 fetch로 데이터를 가져올 때 Data Cache라는 저장소에 결과를 보관함.
options.cache 옵션을 통해 fetch결과를 어떻게 캐싱/재사용할지를 제어함

(default)
개발 모드 : 항상 새로운 요청 
프로덕션 모드 : 빌드타임에 데이터 캐싱 후 '우선' 정적 데이터 사용
Dynamic API => cookies(), headers(), searchParams => 동적 데이터 가져오기 
👉 Next.js가 자동으로 SSR/SSG를 판단해서 빌드합니다.


같은 URL 요청이 있으면 Data Cache에서 꺼내 사용, 데이터가 없으면 새로 패치해서 캐시에 저장, 이후 정적 데이터 사용
cache: 'force-cache'
export const dynamic = 'force-static'
👉 빌드 시 한 번만 패치 -> 이후 요청은 캐시된 데이터 그대로 사용
👉 데이터가 바뀌거나 수정되어도 데이터를 가져오지 않음. revalidate전 까지

캐시하지 않고 매번 원본 서버에서 새로운 데이터를 가져옴 (Dynamic SSR)
실시간 데이터 
cache:'no-store'
export const dynamic = 'force-dynamic'
👉 항상 새로운 요청과 새로운 데이터 (실시간성 보장)
👉 성능이 떨어질 수 있음

*/



import { Photo } from "@/@types/type";


export default async function fetchPhotos (
  init?:RequestInit
):Promise<Photo[]> {
  
  const END_POINT = 'https://picsum.photos/v2/list?page=8&limit=10'

  try{
    const res = await fetch(
      END_POINT,
      { ...init }
    );
    if(!res.ok){
      throw new Error()
    }
    return await res.json()
  }
  catch{
    console.error('error!');
    return []
  }
}


