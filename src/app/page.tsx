import AnimatedPhotoList from "@/components/AnimatedPhotoList";
import { getRandomPhotos } from "@/utils/getRandomPhotos";
import { Metadata } from "next";




export const metadata:Metadata = {
  title:'Triangle | Main',
  description: '삼각형 프로젝트 메인 페이지입니다.'
}


// 10개의 랜덤 이미지를 가져와 렌더링 


export default async function Home() {


  const data = await getRandomPhotos();



  return (
   <div className="pb-10">
    <h1 className="text-center p-10">
      <strong className="text-3xl">Triangle에서</strong>
      <span className="block">다양한 작가들의</span>
      <span>사진들을 만나보세요</span>
    </h1>
    <AnimatedPhotoList data={data}/>
   </div>
  );
}
