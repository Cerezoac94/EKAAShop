import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";
import { useAddProductWishMutation } from "../../../redux/service/wish.service";
import InterestYouSwiper from "../../home/components/interestYou/InterestYouSwiper";
import AddToCart from "../../shoppinCart/components/Cart/AddToCart";

const ProductDetail = ({ p }) => {
	// TODO: refactoriza useMeQuery
	const me = 3;
	const [addProductWish, { isSuccess, isLoading }] =
		useAddProductWishMutation();

	const clicked = (e) => {
		console.log({ me, e });
		addProductWish({ idUser: me, idProduct: e });
	};

	return (
		<Container fluid className="product_detail_container">
			<section className="product_header_mobile">
				<section className="product_detail_header">
					<label className="title_label">{p.name}</label>
					<p className="product_description">{p.description}</p>
				</section>
				<section className="product_image_section">
					<Image fluid src={p.image} alt={p.name} />
					<button onClick= {() => clicked(p.id)} className="btn_heart"> 
              <ion-icon name="heart-outline" class="add_product_icon"></ion-icon></button>
				</section>
			</section>

			<section className="buying_info_section">
				<label className="product_price">$350.00</label>
				<label className="feeds_label">Import Feeds Included</label>
				<label className="product_delivery_label">
					<span className="product_free_ship_label">Entrega GRATIS</span> el
					Domingo 4 de marzo. Realiza tu pedido ahora.
				</label>
				<label className="stock_item">In Stock</label>
				<div className="quantity_dropdown">
					<label for="quantity_item">Quantity:</label>
					<select name="qty" id="qty" className="add_qty">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
					</select>
				</div>
				<section className="action_products_btns_section">
					<button className="add_product_btn">Add to Cart</button>
				</section>
			</section>

			<section className="might_like_swiper_section">
        <label className="subtitle_label">You might also like</label>
       <InterestYouSwiper/>
      </section>
			
			<section className="product_detail_footer_section">
				<section>
					<label className="product_price">${p.price}</label>
					<label className="product_free_ship_label">Stock: {p.stock}</label>
				</section>
				<section>
					{/* REVIEW */}
					<AddToCart p={p} me={14} />
				</section>
			</section>
		</Container>
	);
};

export default ProductDetail;
