import { useEffect } from "react";
import FormSelect from "react-bootstrap/esm/FormSelect";
import CategoryMap from "../category/CategoryMap";
import { useCreateProductMutation } from "../../../../redux/service/product.service";
import { useForm } from "react-hook-form";
import ErrorForm from "../../../../components/errorsForms/ErrorForm";
import Swal from 'sweetalert2'

const CreateProduct = () => {
  const [create,  { error, data }] = useCreateProductMutation()
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const submit = (data) => create(data);

  useEffect(() => {
   if(data) Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'Producto creado con éxito',
    showConfirmButton: false,
    timer: 1000
  })
  }, [data])



  return (
    <div className="createProduct">
      <div className="card-header">
        <div className="text-header">Crear Producto</div>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit(submit)}>
          <div className="form-group">
            <label>Nombre:</label>
            <input {...register("name", {
            required: true,
            minLength: 3,
            maxLength: 100,
            pattern: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚüÜ]+([ ][a-zA-Z0-9ñÑáéíóúÁÉÍÓÚüÜ]+){0,2}$/
           })} type="text" className="form-control" />
           {errors.name?.type === 'required' && <ErrorForm message={"Campo obligatorio"}/>
          }
          {errors.name?.type === 'minLength' && <ErrorForm message={"Mínimo 3 caracteres"}/>
          }
          {errors.name?.type === 'maxLength' && <ErrorForm message={"Demasiados caracteres"}/>
          }
          {errors.name?.type === 'pattern' && <ErrorForm message={"Solo números y letras y no más de un espacio entre palabra"}/>
          }
          </div>
          <div className="form-group">
            <label>Descripción:</label>
            <input {...register("description", {
            required: true,
            minLength: 15,
            pattern: /^[^<>'\"%&;()=+]*$/
           })} type="text" className="form-control" />
           {errors.description?.type === 'required' && <ErrorForm message={"Campo obligatorio"}/>
          }
          {errors.description?.type === 'minLength' && <ErrorForm message={"Descripcitón demasiado corta"}/>
          }
          {errors.description?.type === 'pattern' && <ErrorForm message={"Caracteres no validos"}/>
          }
          </div>
          <div className="form-group">
            <label>Precio:</label>
            <input  {...register("price", {
            required: true,
            pattern: /^[0-9]+$/
           })}
              type="text" className="form-control"
            />
             {errors.price?.type === 'required' && <ErrorForm message={"Campo obligatorio"}/>
          }
          {errors.price?.type === 'pattern' && <ErrorForm message={"Solo caracteres númericos"}/>
          }
          </div>

          <div className="form-group">
            <label>Stock:</label>
            <input {...register("stock", {
            required: true,
            pattern: /^[0-9]+$/
           })} type="text" className="form-control" />
           {errors.stock?.type === 'required' && <ErrorForm message={"Campo obligatorio"}/>
          }
          {errors.stock?.type === 'pattern' && <ErrorForm message={"Solo caracteres númericos"}/>
          }
          </div>
         
          {/*cuando se implemente firebase
           <div className="form-group">
            <label>Imagen:</label>
            <input type="file"  className="form-control" />
          </div> */}
          <div className="form-group">
            <label>Imagen url:</label>
            <input {...register("image", {
            required: true
           })} type="text" className="form-control" />
           {errors.stock?.type === 'required' && <ErrorForm message={"Campo obligatorio"}/>
          }
          </div>
          <div className="form-group">
            <label>Category:</label>
            <FormSelect {...register("idCategory",{
            required: true}
            )} className="mb-3" id="category" title="Seleccionar">
            <CategoryMap select={1}/>
            </FormSelect>
            {errors.stock?.type === 'required' && <ErrorForm message={"Campo obligatorio"}/>
          }
          </div>
          <button className="btn">Crear</button>
        </form>
        {error &&  <ErrorForm message = {error.data.message}/>}
      </div>
    </div>
  );
};

export default CreateProduct;
