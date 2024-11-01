import { signIn } from '@/serverActions/signin'

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
