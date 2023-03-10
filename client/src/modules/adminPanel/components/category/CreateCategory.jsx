import { useEffect } from "react";
import { useCreateCategoryMutation } from "../../../../redux/service/category.service";
import { useForm } from "react-hook-form";

const CreateCategory = () => {
  const data = useCreateCategoryMutation()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const submit = (data) => console.log(data)

  return (
    <section className="section">
      <form onSubmit={handleSubmit(submit)} className="form">
        <h1>Categorias</h1>
        <div className="prop">
          <h3 className="prop__title">Crear Categoria</h3>
          <input {...register("name", {
            required: true,
            minLength: 4,
            maxLength: 20,
            pattern: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚüÜ]+$/
           })} className="prop__input" type="text" placeholder="Escribe un nombre" />
           {errors.userEmail?.type === 'required' && 
          <ion-icon name="information-circle-outline" className="info_circle"> Campo obligatorio</ion-icon>
          }
           
          <button className="prop__button">Crear</button>
        </div>
      </form>
      
    </section>
  );
};

export default CreateCategory;
