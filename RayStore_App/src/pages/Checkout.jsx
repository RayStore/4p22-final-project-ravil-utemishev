import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import CommonSection from "../components/First/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/checkout.css";
import { useSelector } from "react-redux";

function Checkout() {

	const totalQuantity = useSelector((state)=>state.cart.totalQuantity)
	const totalAmount = useSelector((state)=> state.cart.totalAmount)

	return (
		<Helmet title="Касса">
			<CommonSection title="Касса" />
			<section>
				<Container>
					<Row>
						<Col lg="8">
							<h6 className="mb-4 fw-bold">Информация о платеже</h6>
							<Form className="billing__form">
								<FormGroup className="form__group">
									<input type="text" placeholder="Введите Ваше имя" />
								</FormGroup>
								<FormGroup className="form__group">
									<input type="e-mail" placeholder="Введите Ваш email" />
								</FormGroup>
								<FormGroup className="form__group">
									<input type="text" placeholder="Номер телефона" />
								</FormGroup>
								<FormGroup className="form__group">
									<input type="text" placeholder="Адрес улицы" />
								</FormGroup>
								<FormGroup className="form__group">
									<input type="text" placeholder="Город" />
								</FormGroup>
								<FormGroup className="form__group">
									<input type="text" placeholder="Почтовый индекс" />
								</FormGroup>
								<FormGroup className="form__group">
									<input type="text" placeholder="Страна" />
								</FormGroup>
							</Form>
						</Col>

						<Col lg="4">
							<div className="checkout__cart">
								<h6>
									Общее количество: <span>{totalQuantity} товаров</span>
								</h6>
								<h6>
									Подитог: <span>{totalAmount}₽</span>
								</h6>
								<h6>
									<span>
										Доставка: <br />
										бесплатная доставка
									</span>
									<span>₽</span>
								</h6>
								<h4>
									Общая стоимость: <span>{totalAmount}₽</span>
								</h4>
								<button className="buy__btn auth__btn w-100">Разместить заказ</button>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	);
}

export default Checkout;
