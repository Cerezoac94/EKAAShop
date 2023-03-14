import { useGetCartQuery } from "../../../../redux/service/cart.service";
import ErrorForm from "../../../../components/errorsForms/ErrorForm";
import ListCart from "./ListCart";

const ListCartMap = ({ me }) => {
  const { data: results = [], error, isLoading } = useGetCartQuery(me);

  return error ? (
    <ErrorForm message={error.data.message} />
  ) : isLoading ? (
    <h3>Cargando...</h3>
  ) : (
    results?.results?.Products.map((p, i) => <ListCart p={p} key={i} />)
  );
};

export default ListCartMap;
