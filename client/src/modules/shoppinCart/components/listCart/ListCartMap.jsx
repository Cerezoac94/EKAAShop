import { useGetCartQuery } from "../../../../redux/service/cart.service";
import ErrorForm from "../../../../components/errors/ErrorForm";
import WishCart from "../../../../components/wishCart/WishCart";
import CreateOrder from "../../../user_orders/CreateOrder";

const ListCartMap = ({ me }) => {
  const { data: results = [], error, isLoading } = useGetCartQuery(me);
  let total;
  total = results?.results?.Products?.reduce((acc, p) => acc + p.price * p.Cart_Product.quantity,0);

  return error ? (
    <ErrorForm message={error?.data?.message} />
  ) : isLoading ? (
    <h3>Cargando...</h3>
  ) : (
    <section>
      <label className="wish_header">#Cart</label>
      {results?.results?.Products.map((p) => (
        <WishCart p={p} title={"Cart"} key={p.id} />
      ))}
      <h1 style={{textAlign:'center'}} >Total: ${total}</h1>
      {results?.results?.Products && <CreateOrder me={1} />}
    </section>
  );
};

export default ListCartMap;
