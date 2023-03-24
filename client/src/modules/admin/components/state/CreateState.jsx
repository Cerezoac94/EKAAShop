import { useEffect } from "react";
import { useCreateStateMutation } from "../../../../redux/service/state.service";
import { useForm } from "react-hook-form";
import ErrorForm from "../../../../components/errors/ErrorForm";
import Swal from 'sweetalert2'

const CreateState = () => {
  const [create,  { error, data }] = useCreateStateMutation()
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const submit = (data) => create(data)

  useEffect(() => {
   if(data) Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'Estado creado con éxito',
    showConfirmButton: false,
    timer: 1000
  })
  }, [data])


  return (
    <section className="section">
      <form onSubmit={handleSubmit(submit)} className="form">
        <section className="prop">
          <h3 className="prop__title">Crear estado</h3>
          <input {...register("name", {
            required: true,
            minLength: 4,
            maxLength: 30,
            pattern: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚüÜ]+([ ][a-zA-Z0-9ñÑáéíóúÁÉÍÓÚüÜ]+){0,2}$/
           })} className="prop__state_input" type="text" placeholder="Escribe un nombre" />
           {errors.name?.type === 'required' && <ErrorForm message={"Campo obligatorio"}/>
          }
          {errors.name?.type === 'minLength' && <ErrorForm message={"Mínimo 4 caracteres"}/>
          }
          {errors.name?.type === 'maxLength' && <ErrorForm message={"Demasiados caracteres"}/>
          }
          {errors.name?.type === 'pattern' && <ErrorForm message={"Solo números y letras y no más de un espacio entre palabra"}/>
          }
          <button className="prop__adminBtn">Crear!</button>
        </section>
        {error &&  <ErrorForm message = {error.data.message}/>}
      </form>
      
    </section>
  )
}

export default CreateState