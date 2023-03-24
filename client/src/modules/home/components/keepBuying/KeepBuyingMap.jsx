import Loading from "../../../../components/loading/Loading";
import { useGetWishQuery } from "../../../../redux/service/wish.service";
import KeepBuying from "./KeepBuying";

const KeepBuyingMap = ({ me }) => {
	const { data: results = [], isLoading, error } = useGetWishQuery(me);
	if (!error) {
		return isLoading ? (
			<Loading />
		) : (
			results?.results.Products.length > 0 && (
				<section className="keepBuyingSection">
					<label className="keepBuying__label">Seguir Comprando</label>
					<section className="keepBuyingContainer">
						{results?.results.Products.slice(0, 4).map((product) => (
							<KeepBuying product={product} key={product.id} />
						))}
					</section>
				</section>
			)
		);
	}
};

export default KeepBuyingMap;
