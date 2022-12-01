import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products.js";
import Helmet from "../components/Helmet/Helmet.js";
import CommonSection from "../components/First/CommonSection";
import "../styles/product-details.css";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";


function ProductDetails() {

	const { id } = useParams();
	const product = products.find(item => item.id === id);
	const dispatch = useDispatch()

	const { imgUrl, name, cost, description } = product;
	
	const addToCart = () => {
		dispatch(cartActions.addItem({ id, image: imgUrl, name, cost}));
	
		toast.success('Товар успешно добавлен'); 
	}; 
	
	return (
		<Helmet title={name}>
			<CommonSection title={name}/>

			<section className="pt-0">
				<Container>
					<Row>   
						<Col lg="6">
							<img src={imgUrl} alt="" />
						</Col>

						<Col lg="6">
							<div className="product__details">
								<h2>{name}</h2>
							</div>
							<div className="product__rating gap-1 mb-8">
								<span>
									<i className="ri-star-fill"></i>
								</span>
								<span>
									<i className="ri-star-fill"></i>
								</span>
								<span>
									<i className="ri-star-fill"></i>
								</span>
								<span>
									<i className="ri-star-fill"></i>
								</span>
								<span>
									<i className="ri-star-fill"></i>
								</span>

								<span className="pricepart">{cost}</span>
								<p>{description}</p>
								<motion.button whileTap={{scale:1.2}} className="buy__btn" onClick={addToCart}> Добавить в корзину </motion.button>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	);
}

export default ProductDetails;
