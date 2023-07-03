import { Suspense } from 'react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>this is header</header>
      <Suspense fallback={<div>Loading...</div>}>
       {children}
      </Suspense>
      <footer>This is footer</footer>
    </>
  )
}