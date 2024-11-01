export const metadata = {
  title: {
    template: 'Movies / %s',
    default: '기본 제목'
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="p-2">{children}</section>
}
