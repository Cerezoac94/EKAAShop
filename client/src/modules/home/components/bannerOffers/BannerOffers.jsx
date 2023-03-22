import { Link } from "react-router-dom";

const BannerOffers = ({ descuentos }) => {

  return descuentos.slice(0, 1).map((p) => {
    
    return (
      
        <article className="ofertaContainer" key={p.id}>
          <section className="ofertaContainer__cont">
            
              <img className="pictureCont" src={p.Product.image} alt="Banner" />
            

            <section className="ofertaContainer__oferta">
              <Link to={`/product_detail/${p.idProduct}`}>
              <button className="ofertaContainer__btn">Ver mas</button>
              </Link>
              <section>
                <h2 className="ofertaContainer__h2">
                  Obténlo con un descuento del {p.discount}%.
                </h2>
                <span className="ofertaContainer__span">
                  {p.Product.name}
                </span>
              </section>
              <button className="ofertaContainer__btn">Add to Cart</button>
            </section>
          </section>
        </article>
      
    );
  });
  
};
export default BannerOffers;
