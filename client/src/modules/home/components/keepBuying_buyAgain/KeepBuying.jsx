
const KeepBuying = ({ product }) => {
  return (
    <article className="keepBuying">
      <section>
        <img src={product.image} alt={product.name} className="keepBuying__img"/>
      </section>
    <section className="keepBuying__text">
        <h1 className="keepBuying__title">{product.name}</h1>
        <span className="keepBuying__paragraph">{product.price}</span>
    </section>
    </article>
  )
}

export default KeepBuying