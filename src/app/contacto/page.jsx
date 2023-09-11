"use client";
import { useRef } from "react"

function Contacto() {

  const inputRefName = useRef()
  const inputRefEmail = useRef()
  const inputRefMessage = useRef()

  return (
    <main>
      <h1>¡Esta es la página para contactarnos!</h1>
      <p>Teléfono: 234342215</p>
      <p>Instagram: @contacto</p>

      <form onSubmit={(e) => {
        e.preventDefault()
        console.log(inputRefName.current.value, inputRefEmail.current.value, inputRefMessage.current.value )

        if (!inputRefName.current.value || !inputRefEmail.current.value || !inputRefMessage.current.value) {
          return alert('Completa el formulario')
        } 
        alert('Datos enviados correctamente!')
        inputRefName.current.value = ''
        inputRefEmail.current.value = ''
        inputRefMessage.current.value = ''
        
      }} className="pt-8">

        <input type="text" placeholder="Nombre" ref={inputRefName} />
        <input type="email" placeholder="Correo electrónico" ref={inputRefEmail}  />
        <textarea placeholder="Escribe un mensaje..." ref={inputRefMessage} />

        <input type="submit" value="Enviar" />
      </form>
    </main>
  )
}

export default Contacto