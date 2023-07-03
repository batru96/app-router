
async function getData() {
  const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  // return res.json()
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res.json())
    }, 1000)  
  })
}

export default async function Weather() {
  const data = await getData() as any

  return (
    <div>Weather
      <div>longitude: {data.longitude}</div>
      <div>latitude: {data.latitude}</div>

    </div>
  )
}