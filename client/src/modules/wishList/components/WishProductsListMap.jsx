import { useGetWishQuery } from "../../../redux/service/wish.service.jsx";
//import WishProductsList from "./WishProductsList.jsx";
import ErrorFetch from "../../../components/errors/ErrorFetch"
import WishItem from "./WishItem.jsx";
const WishListMap = ({ me }) => {
	const { data: results, isLoading, error } = useGetWishQuery(me);
	// console.log("results", results);
	// console.log("err", error);
	if (!error) {
		return isLoading ? (
			<h3>Cargando...</h3>
		) : (
			results?.results?.Products?.map((w) => (
				<WishItem w={w} key={w.id} />
			))
		);
	} else {
		return isLoading ? (
			<h3>Cargando...</h3>
		) : (<ErrorFetch title="Wish list" message={error?.data?.message}/> )
	}
};

export default WishListMap;
{/* <WishProductsList w={w} key={w.id} /> */}