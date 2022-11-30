import React from 'react';
import '../styles/cart.css';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/First/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import { cartActions } from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

function Cart() {
	const cartItems = useSelector(state => state.cart.cartItems);

	return (
		<Helmet title='Cart'>
			<CommonSection title='Shopping-Cart' />
			<section>
				<Container>
					<Row>
						<Col lg='9'>
							{cartItems.length === 0 ? (
								<h2 className='fs-4 text-center'>Товар не добавлен в корзину</h2>
							) : (
								<table className='table bordered'>
									<thead>
										<tr>
											<th>Изображение</th>
											<th>Название</th>
											<th>Цена</th>
											<th>Качество</th>
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

						<Col lg='3'>
							<div>
								<h6>Subtutoral</h6>
								<span> </span>
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
				<img src={item.imgUrl} alt='' />
			</td>
			<td>{item.name}</td>
			<td>{item.cost}</td>
			<td>5⭐</td>
			<td>
				<motion.p whileTap={{ scale: 1.2 }} onClick={deleteProduct} className='basket'>
					🧺
				</motion.p>
			</td>
		</tr>
	);
};

export default Cart;
