import SlideHomeSwipe from "./SlideHomeSwipe";
// import { useGetAllProductsQuery } from "../../../../redux/service/product.service";

const SlideHomeMap = () => {
  // const { data: results = [], isLoading, error } = useGetAllProductsQuery();
  

  // return error ? (
  //   error.message
  // ) : isLoading ? (
  //   <h3>Cargando...</h3>
  // ) : (
  //   results.results.slice(0,3).map(p=><SlideHomeSwipe p={p} key={p.id}/>)
  // );
  return(
    <SlideHomeSwipe/>
  )
};
export default SlideHomeMap;
