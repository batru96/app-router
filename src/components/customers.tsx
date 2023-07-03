
interface Customer {
  name: string;
  age: number
}

async function getData(): Promise<Customer[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: 'Khoa', age: 10 },
        { name: 'Phuong', age: 11 },
        { name: 'Nam', age: 12 },
      ])
    }, 1500)
  })
}

export default async function Customers() {
  const customers = await getData()

  return (
    <div>
      <div>Customers:</div>
      <ul>
        {customers.map((item) => (
          <li key={item.name}>{item.name} - {item.age}</li>
        ))}
      </ul>
    </div>
  )
}