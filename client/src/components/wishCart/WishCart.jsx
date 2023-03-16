// import CreateOrder from "./CreateOrder";
import Decrement from "../../modules/shoppinCart/components/listCart/Decrement";
import DeleteProductCart from "../../modules/shoppinCart/components/listCart/DeleteProductCart";
import Increment from "../../modules/shoppinCart/components/listCart/Increment";

const WishCart = ({ p, title }) => {
	return (
		<>
			<section className="listCart">
				<section className="listCart__allContainer">
					{/*  <section> */}
					<article className="listCart__card">
						<div className="listCart__contimg">
							<img src={p.image} className="listCart__img" alt={p.name} />
							{title == "Cart" && (
								<div className="listCart__contBtn">
									<Decrement p={p} me={1} />
									<p className="listCart__inputIcon">
										{p.Cart_Product.quantity}
									</p>
									<Increment p={p} me={1} />
								</div>
							)}
						</div>

						<div className="listCart__text">
							<div className="listCart__labels">
								<h2 className="listCart__confirmation">{`Add to ${title}`}</h2>
								<span className="listCart__desc">{p.name}</span>
								<span className="listCart__price">${p.price}</span>

								<div>
									{p.stock != 0 ? (
										<small className="listCart__stock">In stock</small>
									) : (
										<small className="listCart__stock">Out stock</small>
									)}
								</div>

								<label className="listCart__price">
									Stock: <span className="listCart__color">{p.stock}</span>
								</label>
							</div>

							{title == "Cart" && (
								<div className=" listCart__pay">
									<div className="listCart__contBtnThird">
										<DeleteProductCart me={1} p={p} />
									</div>
									<div>
										<h4 className="listCart__h2">
											Subtotal:{" "}
											<span className="listCart__span">
												${parseInt(p.price) * p.Cart_Product.quantity}
											</span>
										</h4>
									</div>
								</div>
							)}
							{/* Este btn es para eliminar de wish */}
							{title == "Wish" && (
								<section className="listCart__contBtnThird">
									<button href="/" className="delete_product_btn">
										Delete
									</button>
								</section>
							)}
						</div>
					</article>
				</section>
			</section>
		</>
	);
};

export default WishCart;
