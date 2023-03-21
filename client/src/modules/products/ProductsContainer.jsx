import ProductsMap from "./components/allproducts/ProductsMap";
import ProductsByCategoryMap from "./components/productsByCategoryMap/ProductsByCategoryMap";

export const AllProductsContainer = () => {
  return (
    <ProductsMap />
  );
};

export const DrinkwareContainer = () => {
  return (
    <ProductsByCategoryMap category={ 1 } />
  );
};

export const CoolerContainer = () => {
  return <ProductsByCategoryMap  category={ 2 } />;
};

export const AccessoriesContainer = () => {
  return <ProductsByCategoryMap  category={ 3 } />;
};
