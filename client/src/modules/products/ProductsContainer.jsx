import ProductsMap from "./components/allproducts/ProductsMap";
import AccessoriesMap from "./components/categories/accesories/AccessoriesMap";
import CoolerMap from "./components/categories/cooler/CoolerMap";
import DrinkwareMap from "./components/categories/drinkware/DrinkwareMap";

export const AllProductsContainer = () => {
  return (
    <ProductsMap />
    // este llamará al componente Productsmap
  );
};

export const DrinkwareContainer = () => {
  return (
    <DrinkwareMap />
    // este llamará al componente drinkwaremap
  );
};

export const CoolerContainer = () => {
  return <CoolerMap />;
};

export const AccessoriesContainer = () => {
  return <AccessoriesMap />;
};
