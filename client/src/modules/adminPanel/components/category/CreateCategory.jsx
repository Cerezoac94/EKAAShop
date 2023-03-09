import React from "react";
import CategoryMap from "./CategoryMap";

const CreateCategory = () => {
  return (
    <section className="category">
      <form className="form">
        <h1>Categorias</h1>
        <div className="prop">
          <h3 className="prop__title">Crear Categoria</h3>
          <input className="prop__input" type="text" placeholder="Escribe un nombre" />
          <button className="prop__button">Crear</button>
        </div>
      </form>
      
    </section>
  );
};

export default CreateCategory;
