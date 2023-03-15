import React from 'react'

export default function Formulario() {
    const handleName = () => {

    }

    const handleSubmit = () =>{

    }



  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Ingresa el nombre del personaje</label>
            <input type="text" placeholder='ingresa el personaje' className='form-control' onChange={handleName}/>
            <button className='btn btn-dark' type='submit'>Buscar personaje</button>
        </form>
    </div>
  )
}
