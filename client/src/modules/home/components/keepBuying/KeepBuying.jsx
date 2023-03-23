import { Link } from "react-router-dom"
const KeepBuying = ({ product }) => {
  return (
  <Link to={`/product_detail/${product.id}`}>
    <article className="keepBuying">
      
      <section>
        <img src={product.image} alt={product.name} className="keepBuying__img"/>
      </section>
    <section className="keepBuying__text">
        <h1 className="keepBuying__title">{product.name}</h1>
        <span className="keepBuying__paragraph">{product.price}</span>
    </section>
   
    </article>
    </Link>
  )
}

export default KeepBuying