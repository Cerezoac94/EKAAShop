import { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";
import Swal from "sweetalert2";
import { useMeQuery } from "../../../redux/service/session.service";
import { useAddProductWishMutation } from "../../../redux/service/wish.service";
import InterestYouSwiper from "../../home/components/interestYou/InterestYouSwiper";
import AddToCart from "../../shoppinCart/components/Cart/AddToCart";

const ProductDetail = ({ p }) => {
  const { data: me, error } = useMeQuery();
  
  const [addProductWish, { data }] = useAddProductWishMutation();

  const clicked = (e) => {
    !error
      ? addProductWish({ idUser: me.result.id, idProduct: e })
      : Swal.fire({
          position: "top",
          icon: "error",
          title: "You must register to add products to your wish",
          showConfirmButton: true,
        });
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
        <label className="product_price">
          <sup className="currency">MXN</sup>${p.price}
        </label>
        {p.stock > 0 ? (
          <label className="stock_item">In Stock</label>
        ) : (
          <label className="out_stock_item">Out Stock</label>
        )}

        <div className="quantity_dropdown">
          <h5>Quantity aviable: {p.stock}</h5>
          <section>
            {p.stock <= 0 ? undefined : !error ? (
              <AddToCart p={p} me={me.result.id} />
            ) : (
              <AddToCart p={p} />
            )}
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
