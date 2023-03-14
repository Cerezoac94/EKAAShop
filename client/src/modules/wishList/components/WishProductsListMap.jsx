import { useGetWishQuery } from "../../../redux/service/wish.service.jsx";
import WishProductsList from "./WishProductsList.jsx";
const WishListMap = ({ me }) => {
  const { data: results, isLoading, error } = useGetWishQuery(me); 

  return (
      error ? ( 
        <h1>{error?.data?.message}</h1>
      ) : isLoading ? (
        <h3>Cargando...</h3>
      ) : (
        (results?.results?.Products?.map((w) => <WishProductsList w={w} key={w.id}/>))
      )

    /* este compoente va mapear los productos de las listas (cooler o yetiss) */
  );
};

export default WishListMap;
