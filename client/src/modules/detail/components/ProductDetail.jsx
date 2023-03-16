import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";
import Swal from "sweetalert2";
import { useAddProductWishMutation } from "../../../redux/service/wish.service";
import InterestYouSwiper from "../../home/components/interestYou/InterestYouSwiper";
import AddToCart from "../../shoppinCart/components/Cart/AddToCart";

const ProductDetail = ({ p }) => {
  // console.log("🚀 ~ file: ProductDetail.jsx:9 ~ ProductDetail ~ p:", p);
  // TODO: refactoriza useMeQuery
  const me = 1;
  const [addProductWish, { data }] = useAddProductWishMutation();


  const clicked = (e) => {
    addProductWish({ idUser: me, idProduct: e });
  };

  useEffect(() => {
    if (data) {
      let message = data.message;
      Swal.fire({
        position: "top",
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 600,
      });
    }
  }, [data]);

  return (
    <Container fluid className="product_detail_container">
      <section className="product_header_mobile">
        <section className="product_detail_header">
          <label className="title_label">{p.name}</label>
          <p className="product_description">{p.description}</p>
        </section>
        <section className="product_image_section">
          <Image fluid src={p.image} alt={p.name} />
          <span onClick={() => clicked(p.id)} className="btn_heart">
            <ion-icon name="heart-outline" class="add_product_icon"></ion-icon>
          </span>
        </section>
      </section>

      <section className="buying_info_section">
        <label className="product_price"><sup className="currency">MXN</sup>${p.price}</label>
        {p.stock > 0 ? (
          <label className="stock_item">In Stock</label>
        ) : (
          <label className="out_stock_item">Out Stock</label>
        )}

        <div className="quantity_dropdown">
          <h3>Quantity:</h3>
          <section>
            <AddToCart p={p} me={1} />
          </section>
        </div>
      </section>

      <section className="might_like_swiper_section">
        <label className="subtitle_label">You might also like</label>
        <InterestYouSwiper />
      </section>
    </Container>
  );
};

export default ProductDetail;
