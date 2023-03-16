import { useGetWishQuery } from "../../../redux/service/wish.service.jsx";
//import WishProductsList from "./WishProductsList.jsx";
import ErrorFetch from "../../../components/errors/ErrorFetch";
import WishItem from "./WishItem"
import Container from "react-bootstrap/Container";
const WishListMap = ({ me }) => {
  const { data: results, isLoading, error } = useGetWishQuery(me);
  // console.log("results", results);
  // console.log("err", error);
  if (!error) {
    return isLoading ? (
      <h3>Cargando...</h3>
    ) : (
      <Container className="wish_item_section">
		<label className="wish_header">#WishList</label>
        {results?.results?.Products?.map((w) => (
          <WishItem w={w} key={w.id} />
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
