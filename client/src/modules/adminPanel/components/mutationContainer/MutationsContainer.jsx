import { useParams } from "react-router-dom"
// import { useGetCategoryByIdQuery } from "../../../../redux/service/category.service"
// import Detail from "../../../../pages/Detail"
//importar el useGetCategoryById()

export const CategoryMutationContainer = () => {
  const {id} = useParams()
  
  //Const {is}= useGetCategoryById(id)
  return (
    //Category
    <Detail category={id}/>
    //Delete
    //<Category.id> 
  )
}

export const ProductMutationContainer = () => {
  const {id} = useParams()
  //Const {is}= useGetCategoryById(id)
  return (
    //Category
    <Detail category={id}/>
    //Delete
    //<Category.id> 
  )
}

// export const StateMutationContainer = () => {
//   const {id} = useParams()
//   //Const {is}= useGetCategoryById(id)
//   return (
//     //Category
//     <Detail category={id}/>
//     //Delete
//     //<Category.id> 
//   )
// }

// export const OrdersMutationContainer = () => {
//   const {id} = useParams()
//   //Const {is}= useGetCategoryById(id)
//   return (
//     //Category
//     <Detail category={id}/>
//     //Delete
//     //<Category.id> 
//   )
// }

// export const DiscountsMutationContainer = () => {
//   const {id} = useParams()
//   //Const {is}= useGetCategoryById(id)
//   return (
//     //Category
//     <Detail category={id}/>
//     //Delete
//     //<Category.id> 
//   )
// }

// export const ReviewsMutationContainer = () => {
//   const {id} = useParams()
//   //Const {is}= useGetCategoryById(id)
//   return (
//     //Category
//     <Detail category={id}/>
//     //Delete
//     //<Category.id> 
//   )
// }