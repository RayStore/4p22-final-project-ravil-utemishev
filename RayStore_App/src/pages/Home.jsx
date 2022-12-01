import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../assets/data/products";

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";

import Services from "../services/Services";
import ProductsList from "../components/First/ProductsList";

import Clock from "../components/First/Clock";

import counterImg from "../assets/images/counter-timer-img.png";

function Home() {
	const [trendingProducts, setTrendingProducts] = useState([]);
	const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [equipmentProducts, setEquipmentProducts] = useState([]);
  const [interiorProducts, setInteriorProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

	const year = new Date().getFullYear();

	useEffect(() => {
		const filteredTrendingProducts = products.filter(
			item => item.categories === "Wheels"  
		);
		const filteredBestSalesProducts = products.filter(
			item => item.categories === "Lubricant"
		);
		const filteredequipmentProducts = products.filter(
			item => item.categories === "Equipment"
		);
		const filteredInteriorProducts = products.filter(
			item => item.categories === "Interior"
		);
		const filteredPopularProducts = products.filter(
			item => item.categories === "Tyres"
		);

		setTrendingProducts(filteredTrendingProducts);
		setBestSalesProducts(filteredBestSalesProducts);
		setEquipmentProducts(filteredequipmentProducts);
		setInteriorProducts(filteredInteriorProducts);
    setPopularProducts(filteredPopularProducts);  
	}, []);

	return (
		<Helmet title={"Home"}>
			<section className='hero__section'>
				<Container>
					<Row>
						<Col lg='6' md='6'>
							<div className='hero__content'>
								<p className='hero__subtitle'> Популярные детали {year}</p>
								<h2>
									{" "}
									Позвольте своему автомобилю качественные детали для
									безопасности{" "}
								</h2>
								<p>
									Создаём условия для максимальной реализации потенциала Вашего
									автомобиля. Предлагаем широкий ассортимент товаров для
									автосервиса.
								</p>
								<motion.button whileTap={{ scale: 1.2 }} className='buy__btn'>
									<Link to='/shop'>Купить сейчас</Link>
								</motion.button>
							</div>
						</Col>

						<Col lg='6' md='6'>
							<div className='hero__img'>
								<img src={heroImg} alt='' />
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			<Services />
			<section className='trending__products'>
				<Container>
					<Row>
						<Col lg='12' className='text-center'>
							<h2 className='section__title'>В тренде </h2>
						</Col>
						<ProductsList data={trendingProducts} />
					</Row>
				</Container>
			</section>

			<section className='best__sales'>
				<Container>
					<Row>
						<Col lg='12' className='text-center'>
							<h2 className='section__title'>Отличные покупки</h2>
						</Col>

						<ProductsList data={bestSalesProducts} />
					</Row>
				</Container>
			</section>

			<section className='timer__count'>
				<Container>
					<Row>
						<Col lg='6' md='12' className="count__down-col">
							<div className='clock__top-content'>
								<h4 className='text-white fs-6 mb-2'>
									Ограниченное предложение
								</h4>
								<h3 className='text-white fs-5 mb-3'>Товары по акции</h3>
							</div>

							<Clock />

							<motion.button
								whileTap={{ scale: 1.2 }}
								className='buy__btn store__btn'
							>
								<Link to='/shop'>Посетить магазин</Link>
							</motion.button>
						</Col>

						<Col lg='6' md='12' className="text-end counter__img">
							<img src={counterImg} alt=' '></img>
						</Col>
					</Row>
				</Container>
			</section>

			<section className='new__arrivals'>
				<Container>
					<Row>
						<Col lg='12' className="text-center mb-5">
							<h2 className='section__title'>Новые поступления</h2>
						</Col>
						<ProductsList data={equipmentProducts} />
						<ProductsList data={interiorProducts} />
					</Row>
          </Container>
      </section>

      <section className="popular__category">
      <Container>
          <Row>  
            <Col lg='12' className='text-center'>
							<h2 className='section__title'>Популярные в категории</h2>
						</Col>
						<ProductsList data={popularProducts} />

					</Row>
				</Container>
			</section>
		</Helmet>
	);
}

export default Home;
