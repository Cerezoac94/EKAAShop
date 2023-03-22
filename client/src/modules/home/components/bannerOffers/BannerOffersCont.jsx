import ErrorFetch from "../../../../components/errors/ErrorFetch";
import Loading from "../../../../components/loading/Loading";
import { useGetProductsWithDiscountQuery } from "../../../../redux/service/product.service";
import BannerOffers from "./BannerOffers";

const BannerOffersCont = () => {
  const {
    data: results = [],
    isLoading,
    error,
  } = useGetProductsWithDiscountQuery();

  const random = () => {
    return Math.random() - 0.5;
  };

  let descuentos = [];
  if (!isLoading) {
    descuentos = structuredClone(results.results);
    descuentos.sort(random);
  }

  return error ? (
    <ErrorFetch title={error} message={error.data.message} />
  ) : isLoading ? (
    <Loading />
  ) : (
    <BannerOffers descuentos={descuentos} />
  );
};
export default BannerOffersCont;
