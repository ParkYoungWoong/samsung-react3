// http://localhost:3000/movies/tt4154796

import Image from 'next/image'
async function getMovie(movieId: string, plot: 'full' | 'short') {
  await new Promise(resolve => setTimeout(resolve, 500))
  const res = await fetch(
    `http://omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${movieId}&plot=${plot}`
  )
  return res.json()
}

export async function generateMetadata({
  params,
  searchParams
}: {
  params: Promise<{ movieId: string }>
  searchParams: Promise<{ plot: 'full' | 'short' }>
}) {
  const { movieId } = await params
  const { plot } = await searchParams

  const movie = await getMovie(movieId, plot)

  return {
    title: `이 페이지의 제목은 ${movie.Title}입니다.`,
    description: movie.Plot
  }
}

export default async function Page({
  params,
  searchParams
}: {
  params: Promise<{ movieId: string }>
  searchParams: Promise<{ plot: 'full' | 'short' }>
}) {
  console.log('params', await params)
  const { movieId } = await params
  const { plot } = await searchParams

  if (!movieId) {
    throw new Error('영화 ID가 필요해요~')
  }

  const movie = await getMovie(movieId, plot)

  return (
    <>
      <h1>Dynamic Movie Details</h1>
      <h2>{movie?.Title}</h2>
      <p>{movie?.Plot}</p>
      <Image
        src={movie?.Poster || ''}
        alt={movie?.Title || ''}
        width={200}
        height={300}
      />
    </>
  )
}
