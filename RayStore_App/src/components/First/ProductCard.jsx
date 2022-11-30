import React from 'react';

import { motion } from 'framer-motion';
import '../../styles/product-card.css';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

function ProductCard({ item }) {
	const dispatch = useDispatch();

	const addToCart = () => {
		dispatch(
			cartActions.addItem({
				id: item.id,
				name: item.name,
				cost: item.cost,
				imgUrl: item.imgUrl
			})
		);

		toast.success("Товар добавлен успешно");
	};

	return (
		<Col lg='3' md='4' className='mb-2'>
			<div className='product__item'>
				<div className='product__img'>
					<motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt=' ' />
				</div>
				<div className='accum product__info'>
					<h3 className='product__name'>
						<Link to={`/shop/${item.id}`}>{item.name}</Link>
					</h3>
					<span>{item.categories}</span>
				</div>
				<div
					className='product__card-bottom d-flex align-items-center 
        justify-content-between accum'
				>
					<span className='price'>${item.cost}</span>
					<motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
						<i className='ri-shopping-cart-2-line'></i>
					</motion.span>
				</div>
			</div>
		</Col>
	);
}

export default ProductCard;



//  console.log(state.totalQuantity);
//  console.log(state.cartItems);
//  console.log(newItem);