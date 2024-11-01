export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="opacity-50">(abc) 그룹의 레이아웃입니다.</div>
      {children}
    </>
  )
}
