"use client"
import { useState } from "react"

function Counter() {

    const [contador, setContador] = useState(0)

  return (
    <div className="mt-8 text-2xl">
     <p>{contador}</p>
     <button onClick={() => setContador(contador + 1)}>Sumar</button>
    </div>
  )
}

export default Counter