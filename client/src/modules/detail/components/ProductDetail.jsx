import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";
import { useAddProductWishMutation } from "../../../redux/service/wish.service";
import AddToCart from "../../shoppinCart/components/Cart/AddToCart";
import MightLikeMap from "./mightLike/MightLikeMap";
import ProductDetailDesktop from "./ProductDetailDesktop";

const ProductDetail = ({ p }) => {
  // TODO: useMeQuery
  const me = 3
  const [addProductWish ,  {isSuccess , isLoading}] = useAddProductWishMutation();

  const clicked = (e) => {
    console.log({me, e})
    addProductWish({idUser:me, idProduct:e})
  };

    return (
      <Container fluid className="product_detail_container">
      <section className="product_header_mobile">
        <section className="product_detail_header">
          <label className="title_label">{p.name}</label>
          <p className="product_description">{p.description}</p>
        </section>
          <section className="product_image_section">
          <Image fluid src={p.image} alt={p.name}/>
            <span onClick= {() => clicked(p.id)}
            className="outline"
              style={{ zIndex: -1 }} >
              <ion-icon name="heart-outline" class="add_product_icon"></ion-icon>
            </span>
            <button onClick= {() => clicked(p.id)}>heart</button>
          </section>
        </section>
        <section className="product_detail_desktop">
        <ProductDetailDesktop />
      </section>
      {/* might like swiper */}
      <section className="might_like_swiper_section">
        <label className="subtitle_label">You might also like</label>
        <MightLikeMap />
      </section>
      {/* Footer product */}
      <section className="product_detail_footer_section">
        <label className="product_price">${p.price}</label>
        <label className="product_free_ship_label">Stock: {p.stock}</label>

          <AddToCart p={p} me={14}/>
        </section>
    </Container>
    );
  }


export default ProductDetail;