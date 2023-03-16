import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { useCreateOrderMutation } from "../../../../redux/service/order.service"





const CreateOrder = ({me}) => {
    // console.log("🚀 ~ file: CreateOrder.jsx:6 ~ CreateOrder ~ me:", me)
    const [createOrder, {data}]= useCreateOrderMutation()
    const {handleSubmit,register}= useForm()
    const navigate = useNavigate();

    const submit =()=>{
       createOrder({id:me});        
    }

    useEffect(() => {
      let timeout = null;
      if (data) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Order successfully created",
          showConfirmButton: false,
          timer: 1000,
        });
  
        timeout = setTimeout(() => {
          navigate("/");
        }, 1200);
      }
      return () => clearTimeout(timeout);
    }, [data]);

    
  return (
    <form className='createOrderCont'onSubmit={handleSubmit(submit)}>
        <input {...register("id")} className="createOrderCont__order" type="submit" value="Crear Order" />
    </form>
    
  )
}

export default CreateOrder