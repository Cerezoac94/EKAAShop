import React from "react";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";
import stanley_cup from "../../../assets/stanley_tumbler.jpg";
import AddToCart from "../../shoppinCart/components/Cart/AddToCart";
//import MightLike from "./mightLike/MightLike.jsx"
import MightLikeMap from "./mightLike/MightLikeMap";
import ProductDetailDesktop from "./ProductDetailDesktop";

const ProductDetail = ({ p }) => {
  // console.log("🚀 ~ file: ProductDetail.jsx:10 ~ ProductDetail ~ p:", p)
  return (
    <Container fluid className="product_detail_container">
      <section className="product_header_mobile">
        <section className="product_detail_header">
          <section className="product_rate_container">
            <label className="rate_product_label">{p.name}</label>
            {/* <Container className="rate_icons_container">
            <ion-icon name="star-outline" className="rate_icons"></ion-icon>
            <ion-icon name="star-outline" className="rate_icons"></ion-icon>
            <ion-icon name="star-outline" className="rate_icons"></ion-icon>
          </Container> */}
          </section>
          <Container className="product_description_container">
            <p className="product_description">{p.description}</p>
            {/* <ion-icon name="share-outline" class="share_product_icon"></ion-icon> */}
          </Container>
        </section>
        <section className="product_image_section">
          <Image fluid src={p.image} />
          <ion-icon
            name="heart-outline"
            className="add_product_icon"
          ></ion-icon>
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
        <span className="product_price">${p.price}</span>
        <span className="product_free_ship_label">Stock: {p.stock}</span>
        <section className="cart">
          <AddToCart p={p} me={15}/>
        </section>
        
      </section>
    </Container>
  );
};

export default ProductDetail;
