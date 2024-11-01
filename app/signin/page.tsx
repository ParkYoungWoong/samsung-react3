import { signIn } from '@/serverActions/signin'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '로그인 페이지',
  description:
    '여기는 로그인 페이지이고, 아이디와 비밀번호를 입력하면 로그인 됩니다.'
}

export default function SignIn() {
  return (
    <form
      action={signIn}
      className="flex flex-col gap-2">
      <input
        type="email"
        name="id"
        placeholder="이메일"
        className="text-black"
      />
      <input
        type="password"
        name="pw"
        placeholder="비밀번호"
        className="text-black"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white hover:bg-blue-700">
        로그인
      </button>
    </form>
  )
}
