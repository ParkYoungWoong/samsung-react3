// http://localhost:3000/movies/tt4154796?plot=short

// Next14 =>> const { movieId } = params
// Next15 =>> const { movieId } = await params

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

  async function fetchMovieDetails() {
    await new Promise(resolve => setTimeout(resolve, 2000))
    const res = await fetch(
      `http://omdbapi.com/?apikey=7035c60c&i=${movieId}&plot=${plot}`
    )
    return res.json()
  }
  const movie = await fetchMovieDetails()

  return (
    <>
      <h1>Dynamic Movie Details</h1>
      <h2>{movie?.Title}</h2>
      <p>{movie?.Plot}</p>
      <img
        src={movie?.Poster}
        alt={movie?.Title}
      />
    </>
  )
}
