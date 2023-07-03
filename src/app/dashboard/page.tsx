

export default async function Dashboard() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  if (res.ok) {
    const json = await res.json()
    return (
      <div>Dashboard: {json.stargazers_count}</div>
    )
  }
  return <div>Something went wrong</div>
}