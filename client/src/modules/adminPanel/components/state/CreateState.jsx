import React from 'react'

const CreateState = () => {
  return (
    <section className="section">
      <form className="form">
        <h1>Estados</h1>
        <div className="prop">
          <h3 className="prop__title">Crear estado</h3>
          <input className="prop__input" type="text" placeholder="Escribe un nombre" />
          <button className="prop__button">Crear</button>
        </div>
      </form>
      
    </section>
  )
}

export default CreateState