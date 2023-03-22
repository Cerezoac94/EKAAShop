import { useMeQuery } from "../../../../redux/service/session.service";
import { Link } from "react-router-dom";
import AddtoCartHome from "../slideHome/AddtoCartHome";

const BannerOffers = ({ descuentos }) => {
  const { data: me=[], error:err} = useMeQuery();

  return descuentos.slice(0, 1).map((p) => {
    
    return (
      
        <article className="ofertaContainer" key={p.id}>
          <section className="ofertaContainer__cont">
            
              <img className="pictureCont" src={p.Product.image} alt="Banner" />
            

            <section className="ofertaContainer__oferta">
              <Link to={`/product_detail/${p.idProduct}`}>
              <button className="ofertaContainer__offerBtn">Ver mas</button>
              </Link>
              <section>
                <h2 className="ofertaContainer__h2">
                  Obténlo con un descuento del {p.discount}%.
                </h2>
                <span className="ofertaContainer__span">
                  {p.Product.name}
                </span>
              </section>
              {!err?(<AddtoCartHome p={p.id} me={me.result.id}/>):<AddtoCartHome p={p.id}/>}
            </section>
          </section>
        </article>
      
    );
  });
  
};
export default BannerOffers;
