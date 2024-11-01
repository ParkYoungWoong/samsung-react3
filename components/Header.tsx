'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'

const navigations = [
  { href: '/', label: 'Home' },
  { href: '/signin', label: 'Sign In' },
  { href: '/movies', label: 'Movies' },
  { href: '/async', label: 'Async' },
  { href: '/async-parallel', label: 'Async(Parallel)' }
]

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()

  function onClick() {
    console.log('Movie')
    router.push('/movies/tt4154796?plot=full')
    // navigate(-3)
  }

  return (
    <header className="flex items-center">
      <Image
        src="https://heropy.dev/favicon.png"
        alt="HEROPY"
        width="50"
        height="50"
        onLoad={() => {}}
        quality={50}
      />
      <nav className="flex">
        {navigations.map(navigation => (
          <Link
            key={navigation.href}
            href={navigation.href}
            className={`shrink-0 px-2 ${pathname === navigation.href ? 'text-blue-500' : ''}`}>
            {navigation.label}
          </Link>
        ))}
      </nav>
      <button onClick={onClick}>Move to Movies</button>
    </header>
  )
}
