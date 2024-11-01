import Abc from './Abc'
import Xyz from './Xyz'
import { Suspense } from 'react'
import Loader from '@/components/Loader'

export default async function Page() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return (
    <>
      <h1>비동기 컴포넌트 스트리밍!</h1>
      <Suspense fallback={<Loader color="red" />}>
        <Abc />
      </Suspense>
      <Suspense fallback={<Loader color="blue" />}>
        <Xyz />
      </Suspense>
    </>
  )
}
