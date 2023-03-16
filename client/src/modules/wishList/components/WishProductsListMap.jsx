import { useGetWishQuery } from "../../../redux/service/wish.service.jsx";
//import WishProductsList from "./WishProductsList.jsx";
import ErrorFetch from "../../../components/errors/ErrorFetch";
import WishCart from "../../../components/wishCart/WishCart.jsx";
import Container from "react-bootstrap/Container";
const WishListMap = ({ me }) => {
  const { data: results, isLoading, error } = useGetWishQuery(me);
  if (!error) {
    return isLoading ? (
      <h3>Cargando...</h3>
    ) : (
      <Container className="wish_item_section">
		<label className="wish_header">#WishList</label>
        {results?.results?.Products?.map((p) => (
          <WishCart p={p} title={"Wish"} key={p.id} />
        ))}
      </Container>
    );
  } else {
    return isLoading ? (
      <h3>Cargando...</h3>
    ) : (
      <ErrorFetch title="Wish list" message={error?.data?.message} />
    );
  }
};

export default WishListMap;
