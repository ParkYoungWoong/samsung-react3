export default async function Xyz() {
  await new Promise(resolve => setTimeout(resolve, 3000)) // 3001ms
  return <h1>Xyz</h1>
}
