import { useState } from "react";
import Product from "../presentacional/Product";

const FilterProducts = ({ products }) => {

	const [filter, setFilter] = useState("Ninguno");
	const handleFilter = (e) => {
		setFilter(e.target.value);
	};

  const filterPrice = (products, filter) => {
    if(filter != "Ninguno") {
    return products.slice().sort((a, b) => {
      // console.log('price',a.price);
      if (filter == "asc") {
        return parseInt(a.price) - parseInt(b.price);
      } else if (filter == "desc") {
        return parseInt(b.price) - parseInt(a.price);
      }
    });
  }else return products
}
  const filterProducts = filterPrice(products, filter);

	return (
    <>
    <section className="filter">
				<label>
					Ordenar por precio:
					<select className="filterSelect"
						name="filter"
						id="filter"
						placeholder="Ordenar por precio"
						onChange={handleFilter}
						value={filter}
					>
						<option value="Ninguno">Ninguno</option>
						<option value="asc">De menor a mayor</option>
						<option value="desc">De mayor a menor</option>
					</select>
				</label>
			</section>
		<section className="productContainer">
			{filterProducts?.map((p) => (
				<Product product={p} key={p.id} />
			))}
		</section>
    </>
	);
};
export default FilterProducts;
