export default async function Page() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return (
    <>
      <h1>병렬 경로 처리!</h1>
    </>
  )
}
