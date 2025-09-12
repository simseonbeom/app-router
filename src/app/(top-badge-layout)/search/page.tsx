import SearchForm from "@/components/SearchForm";
import fetchPhotos from "@/utils/fetchPhotos";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Triangle | Search",
};

/* 
  1. query 값을 가져옵니다.
    - props 조회
  2. 모든 photos의 데이터를 fetching
  3. keyword를 가지고 filter
  4. render
*/

async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {

  // searchParams를 읽으면 해당 페이지는 dynamic으로 분류
  const { q } = await searchParams;

  const data = await fetchPhotos();

  const results = q
    ? data.filter((p) => p.author.toLowerCase().includes(q.toLowerCase()))
    : [];

  return (
    <div className="px-4">
      <SearchForm />
      {q && (
        <p className="mt-6 text-sm">
          <b>{q}</b> 검색결과 : {results.length} 건
        </p>
      )}
      <ul className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-3">
        {results.map((p) => (
          <li key={p.id}>
            <Link href={`photos/${p.id}`} aria-label={`${p.id}번 이미지로 이동합니다.`}>
              <Image
                src={p.download_url}
                alt={p.author}
                width={400}
                height={300}
              />
            </Link>
            <span className="block px-2 py-2 text-white/90 truncate">Photo by {p.author}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
