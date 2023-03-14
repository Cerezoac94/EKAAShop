import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";
import stanley_cup from "../../../assets/stanley_tumbler.jpg";
import { useAddProductWishMutation } from "../../../redux/service/wish.service";
import { useGetProductByIdQuery } from "../../../redux/service/product.service";
//import MightLike from "./mightLike/MightLike.jsx"
import AddToCart from "../../shoppinCart/components/Cart/AddToCart";
import MightLikeMap from "./mightLike/MightLikeMap";
import ProductDetailDesktop from "./ProductDetailDesktop";
import { useParams } from "react-router-dom";

const ProductDetail = ({me}) => {
  const { id } = useParams();
  // productId localhost/product_detail/4
  // productId === 4
  const { data: productDetail, isLoading, error } = useGetProductByIdQuery(5);
  const [addProductWish ,  {isSuccess , isLoading: loading}] = useAddProductWishMutation();
  // localhost/products/4 localhost/products/productId

console.log(productDetail)
 
  const clicked = (e ) => {
    console.log({me, e})
    addProductWish({idUser:me, idProduct:e})

    //agregar el wish mediante el id del user y el product
    // productId
    // userid from useMeQuery
    // addProductWish(productId, userId)
  };
  
  if (!error) {
    return isLoading  || loading ? (
      <h1> cargando</h1>
    ) : (
      <Container fluid className="product_detail_container">
        <section className="product_header_mobile">
          <section className="product_detail_header">
            <section className="product_rate_container">
              <label className="rate_product_label">
                Yeti Harvest - Vaso rojo
              </label>
              <Container className="rate_icons_container">
                <ion-icon name="star-outline" className="rate_icons"></ion-icon>
                <ion-icon name="star-outline" className="rate_icons"></ion-icon>
                <ion-icon name="star-outline" className="rate_icons"></ion-icon>
              </Container>
            </section>
            <Container className="product_description_container">
              <p className="product_description">
                Vaso Térmico de Acero Inoxidable, Taza Termica Frio y Caliente
                para Cafe con 2-Tapa y 2-Pajita, 2-Cepillo de Limpieza,Termo
                Infusor de Vacío Doble para Hombre, Mujer, Regalo
                (20oz/600ml,Negro)
              </p>
              {/* <ion-icon name="share-outline" class="share_product_icon"></ion-icon> */}
            </Container>
          </section>
          <section className="product_image_section">
            <Image fluid src={stanley_cup} />
            {/*  <ion-icon name="heart-outline" className="add_product_icon" onClick={handle}></ion-icon> */}
            <span
              
              className="outline"
              style={{ zIndex: -1 }}
            >
              <ion-icon name="heart-outline" ></ion-icon>

            </span>
            <button onClick= {() => clicked(5)} >heart</button>
          </section>
        </section>
        <section className="product_detail_desktop">
          <ProductDetailDesktop />
        </section>
        <section className="might_like_swiper_container">
          <label>You might also like</label>
          <MightLikeMap />
        </section>
        <section className="product_detail_footer_container">
          <span className="product_price">$350.00</span>
          <span className="product_delivery_label">
            <span className="product_free_ship_label">Entrega GRATIS</span> el
            Domingo 4 de marzo. Realiza tu pedido ahora.
          </span>
          <section className="action_products_btns_container">
            <button className="add_product_btn">Add to Cart</button>
            <button className="buy_product_btn">Buy now</button>
          </section>
        </section>
      </Container>
    );
  }
};

export default ProductDetail;
