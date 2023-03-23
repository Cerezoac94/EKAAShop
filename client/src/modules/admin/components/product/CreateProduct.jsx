import { useEffect } from "react";
import CategoryMap from "../category/CategoryMap";
import { useCreateProductMutation } from "../../../../redux/service/product.service";
import { useForm } from "react-hook-form";
import ErrorForm from "../../../../components/errors/ErrorForm";
import Swal from 'sweetalert2'

const CreateProduct = () => {
  const [create,  { error, data }] = useCreateProductMutation()
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const formData = new FormData();
  const submit = (data) => {
    console.log(data);
    console.log(data.image[0]);
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("stock", data.stock);
    formData.append("idCategory", data.idCategory);
    formData.append("image", data.image[0]);
    create(formData)
  }

  useEffect(() => {
   if(data) Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'product created successfully',
    showConfirmButton: false,
    timer: 1000
  })
  }, [data])



  return (
    <section className="createProduct">
        <form onSubmit={handleSubmit(submit)} className="formAdminProduct">
          <section className="form-group">
          <h3 className="prop__title">Crear Producto</h3>
            <label>Nombre:</label>
            <input {...register("name", {
            required: true,
            minLength: 3,
            maxLength: 100,
            pattern: /^[a-zA-Z0-9\sáéíóúüñÁÉÍÓÚÜÑ,.]+$/ 
           })} type="text" className="product_input" />
           {errors.name?.type === 'required' && <ErrorForm message={"Campo obligatorio"}/>
          }
          {errors.name?.type === 'minLength' && <ErrorForm message={"Mínimo 3 caracteres"}/>
          }
          {errors.name?.type === 'maxLength' && <ErrorForm message={"Demasiados caracteres"}/>
          }
          {errors.name?.type === 'pattern' && <ErrorForm message={"Solo números y letras y no más de un espacio entre palabra"}/>
          }
          </section>
          <div className="form-group">
            <label>Descripción:</label>
            <input {...register("description", {
            required: true,
            minLength: 15,
            pattern: /^[^<>'\"%&;()=+]*$/
           })} type="text" className="product_input" />
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
            pattern: /^[0-9]+(?:\.[0-9]+)?$/ 
           })}
              type="text" className="product_input"
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
           })} type="text" className="product_input" />
           {errors.stock?.type === 'required' && <ErrorForm message={"Campo obligatorio"}/>
          }
          {errors.stock?.type === 'pattern' && <ErrorForm message={"Solo caracteres númericos"}/>
          }
          </div>
         
          {/*cuando se implemente firebase
           <div className="form-group">
            <label>Imagen:</label>
            <input type="file"  className="product_input" />
          </div> */}
          <div className="form-group">
            <label>Image</label>
            <input {...register("image", {
            required: true
           })} type="file" className="product_input" accept="image/png, image/jpeg"/>
           {errors.stock?.type === 'required' && <ErrorForm message={"Imagen de producto obligatoria"}/>
          }
          </div>
          <section className="form-group">
            <label>Category: </label>
            <select {...register("idCategory",{
            required: true}
            )} className="form-select" id="category" title="Seleccionar">
            <option>Selecciona una categoría </option>
            <CategoryMap select={1}/>
            </select>
            {errors.stock?.type === 'required' && <ErrorForm message={"Campo obligatorio"}/>
          }
          </section>
          <button className="prop__button">Crear</button>
        </form>
        {error &&  <ErrorForm message = {error.data.message}/>}
      </section>
  );
};

export default CreateProduct;
