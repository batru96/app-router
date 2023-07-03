import Customers from "@/components/customers"
import Weather from "@/components/weather"
import { Suspense } from "react"


function Posts() {

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Customers />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Weather />
      </Suspense>
    </div>
  )
}

export default Posts