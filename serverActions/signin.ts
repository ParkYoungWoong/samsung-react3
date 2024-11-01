'use server'
import { redirect } from 'next/navigation'

export async function signIn(formData: FormData) {
  const id = formData.get('id')
  const pw = formData.get('pw')
  console.log(id, pw)
  // ...
  redirect('/')
}
