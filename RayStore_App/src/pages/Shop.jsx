import React, {useState} from "react";

import CommonSection from "../components/First/CommonSection";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";

import '../styles/shop.css';

import products from "../assets/data/products";
import ProductsList from "../components/First/ProductsList";


function Shop() {

	const [productsData, setProductsData] = useState(products); 

	const handleFilter = (e) =>{

		const filterValue = e.target.value
			if (filterValue === 'Brake parts') {
				const filteredProducts = products.filter((item) => item.categories === 'Brake parts');
 
				setProductsData(filteredProducts);
			}

			if (filterValue === 'Clutch') {
				const filteredProducts = products.filter((item) => item.categories === 'Clutch');

				setProductsData(filteredProducts);
			}	

			if (filterValue === 'Electro eqipment') {
				const filteredProducts = products.filter((item) => item.categories === 'Electro eqipment');
			
				setProductsData(filteredProducts); 
			}	
			
			if (filterValue === 'Equipment') {
				const filteredProducts = products.filter((item) => item.categories === 'Equipment');

				setProductsData(filteredProducts);
			}

			if (filterValue === 'Filters') {
				const filteredProducts = products.filter((item) => item.categories === 'Filters');

				setProductsData(filteredProducts);
			}

			if (filterValue === 'Interior') {
				const filteredProducts = products.filter((item) => item.categories === 'Interior');

				setProductsData(filteredProducts);
			}

			if (filterValue === 'Lamps') {
				const filteredProducts = products.filter((item) => item.categories === 'Lamps');

				setProductsData(filteredProducts);
			}	
			if (filterValue === 'Lubricant') {
				const filteredProducts = products.filter((item) => item.categories === 'Lubricant');

				setProductsData(filteredProducts);
			}

			if (filterValue === 'Tyres') {
				const filteredProducts = products.filter((item) => item.categories === 'Tyres');

				setProductsData(filteredProducts);
			}	

			if (filterValue === 'Wheels') {
				const filteredProducts = products.filter((item) => item.categories === 'Wheels');

				setProductsData(filteredProducts);
			}	
	};

	const handleSearch = (e) => {
		const searchTerm = e.target.value; 

		const searchedProducts = products.filter(
			(item) =>item.name.toLowerCase().includes(searchTerm.toLowerCase())
		);

		setProductsData(searchedProducts);
	}	
	
		return (
		<Helmet title="Shop">
			<CommonSection title="????????????" />

			<section>
				<Container>
					<Row>
						<Col lg="3" md="6" className="textwidget">
							<div className="filter__widget">
								<select onChange={handleFilter}>
									<option className="categoty">??????????????????</option>
									<option value="Wheels">??????????</option>
									<option value="Lubricant">??????????</option>
									<option value="Electro eqipment">??????????????????????????????????????</option>
									<option value="Interior">????????????????</option>
									<option value="Equipment">????????????????????????</option>
									<option value="Brake parts">?????????????????? ??????????????</option>
									<option value="Lamps">??????????</option>
									<option value="Filters">??????????????</option>
									<option value="Clutch">??????????????????</option>
									<option value="Tyres">????????</option>
								</select>
							</div>
						</Col>
						<Col lg="3" md="6" className="text-end">
							<div className="filter__widget">
								<select onChange={handleFilter}>
									<option>???????????? ????:</option>
									<option value="ascending">??????????????????????</option>
									<option value="descending">????????????????</option>
								</select>
							</div>
						</Col>
						<Col lg="6" md="12">
							<div className="search__box">
								<input type="text" placeholder="?????????? ???? ?????????? ????????????..." onChange={handleSearch} />
								<span>
									<i className="ri-search-line"></i>
								</span>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="pt-0">
				<Container>
					<Row>
						{productsData.length === 0 ? (
							<h1 className="text-center fs-4">???????????? ???? ??????????????!</h1>
						) : (
							<ProductsList data={productsData} />
						)}
					</Row>
				</Container>
			</section>
		</Helmet>
	);
}

export default Shop;
