import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/First/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const totalAmount = useSelector((state) => state.cart.totalAmount);

	return (
		<Helmet title="Cart">
			<CommonSection title="Shopping-Cart" />
			<section>
				<Container>
					<Row>
						<Col lg="9">
							{cartItems.length === 0 ? (
								<h2 className="fs-4 text-center">Товар не добавлен в корзину</h2>
							) : (
								<table className="table bordered">
									<thead>
										<tr>
											<th>Изображение</th>
											<th>Название</th>
											<th>Цена</th>
											<th>Количество</th>
											<th>Удалить</th>
										</tr>
									</thead>

									<tbody>
										{cartItems.map((item, index) => (
											<Tr item={item} key={index} />
										))}
									</tbody>
								</table>
							)}
						</Col>

						<Col lg="3">
							<div>
								<h6 className="d-flex align-items-center justify-content-between ">
									Подытог
									<span className="fs-4 fw-bold">{totalAmount}₽</span>
								</h6>
							</div>
							<p className="fs-6 mt-2">НДС и доставка будут рассчитаны при оформлении заказа</p>
							<div>
								<button className="buy__btn w-100">
									<Link to="/checkout">Касса</Link>
								</button>
								<button className="buy__btn w-100 mt-3">
									<Link to="/shop">Продолжить покупки</Link>
								</button>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	);
}

const Tr = ({ item }) => {
	const dispath = useDispatch();

	const deleteProduct = () => {
		dispath(cartActions.deleteItem(item.id));
	};

	return (
		<tr>
			<td>
				<img src={item.imgUrl} alt="" />
			</td>
			<td>{item.name}</td>
			<td>{item.cost}</td>
			<td>{item.quantity}</td>
			<td>
				<motion.p whileTap={{ scale: 1.2 }} onClick={deleteProduct} className="basket">
					🧺
				</motion.p>
			</td>
		</tr>
	);
};

export default Cart;
