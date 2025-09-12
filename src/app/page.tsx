import { Metadata } from "next";



export const metadata:Metadata = {
  title:'Triangle | Main',
  description: '삼각형 프로젝트 메인 페이지입니다.'
}



export default function Home() {
  return (
   <div>
    <h1>Home Page</h1>
   </div>
  );
}
