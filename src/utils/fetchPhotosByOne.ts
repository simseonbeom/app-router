import { Photo } from "@/@types/type";


async function fetchPhotosByOne(id:string):Promise<Photo | null> {
  const END_POINT = `${process.env.NEXT_PUBLIC_BASE_URL}/id/${id}/info`;

  try{
    const res = await fetch(END_POINT);
    if(!res.ok) throw new Error('...');
    return await res.json();
  }
  catch{
    console.error('error');
    return null;
  }
}
export default fetchPhotosByOne