import ProductsMap from "./components/allproducts/ProductsMap"
import AccessoriesMap from "./components/categories/accesories/AccessoriesMap"
import CoolerMap from "./components/categories/cooler/CoolerMap"
import DrinkwareMap from "./components/categories/drinkware/DrinkwareMap"


export const AllProductsContainer = () => {
    
  return (
    <section className="container">
    <ProductsMap/>
    </section>
    // este llamará al componente Productsmap
  )
}

export const DrinkwareContainer = () => {
    
  return (
    <section className="container">
      <DrinkwareMap/>
    </section>
    // este llamará al componente drinkwaremap
  )
}

export const CoolerContainer = () => {
    
  return (
    <section className="container">
      <CoolerMap/>
    </section>
  )
}

export const AccessoriesContainer = () => {
    
  return (
    <section className="container">
      <AccessoriesMap/>
    </section>
  )
}