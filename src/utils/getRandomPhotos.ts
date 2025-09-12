

export const getRandomPhotos = async () => {

  const promises = Array.from({length:10}).map((_,i)=> 
    fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/seed/${Date.now()}-${i}-${Math.random()}/400/300`,
      { next: { revalidate:10 } }
    ).then(res => res.url) 
  )
  
  const urls = await Promise.all(promises);

  return urls;
}



