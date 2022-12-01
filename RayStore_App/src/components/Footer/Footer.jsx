import React from "react";
import "./footer.css";
import logo from "../../assets/images/LogoRS-02.png";
import { Icon24LogoVkColor } from "@vkontakte/icons";
import { motion } from "framer-motion";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

function Footer () {

	const year = new Date().getFullYear();
	return (
		<footer className='footer'>
			<Container>
				<Row>
					<Col lg='4' className='mb-4' md='6'>
						<div className='logo'>
							<img src={logo} alt='logo' />
							<div className='logo__label'>
								<h1 className='text-white'>RayStore autoparts</h1>
							</div>
						</div>
						<p className='footer__text mt-4'>
							Оптимальный выбор деталей для ремонта автомобиля. Большой ассортимент товаров. Всегда можно найти запчасти
							оптимального соотношения цены и качества.
						</p>
					</Col>
					<Col lg='3' md='3' className='mb-4'>
						<div className='footer__quick-links'>
							<h4 className='quick__links-tltie'>Лучшие категории</h4>
							<ListGroup>
								<ListGroupItem className='ps-0 border-0'>
									<Link to='#'>Оборудование</Link>
								</ListGroupItem>
								<ListGroupItem className='ps-0 border-0'>
									<Link to='#'>Колеса</Link>
								</ListGroupItem>
								<ListGroupItem className='ps-0 border-0'>
									<Link to='#'>Шины</Link>
								</ListGroupItem>
								<ListGroupItem className='ps-0 border-0'>
									<Link to='#'>Моторные масла</Link>
								</ListGroupItem>
							</ListGroup>
						</div>
					</Col>
					<Col lg='2' md='3' className='mb-4'>
						<div className='footer__quick-links'>
							<h4 className='quick__links-tltie'>Быстрые ссылки</h4>
							<ListGroup>
								<ListGroupItem className='ps-0 border-0'>
									<Link to='/shop'>Магазин</Link>
								</ListGroupItem>
								<ListGroupItem className='ps-0 border-0'>
									<Link to='/cart'>Корзина</Link>
								</ListGroupItem>
								<ListGroupItem className='ps-0 border-0'>
									<Link to='/login'>Вход</Link>
								</ListGroupItem>
								<ListGroupItem className='ps-0 border-0'>
									<Link to='/signup'>Регистрация</Link>
								</ListGroupItem>
							</ListGroup>
						</div>
					</Col>
					<Col lg='3' md='4'>
						<div className='footer__quick-links'>
							<h4 className='quick__links-tltie'>Контакты</h4>
							<ListGroup className='footer__contact'>
								<ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
									<span>
										<i className='ri-map-2-line'></i>
									</span>
									<p>107140, Krasnoprudnaya street 7/9, Moscow, Russia </p>
								</ListGroupItem>
								<ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
									<span>
										<i className='ri-phone-line'></i>
									</span>
									<p>+7 (800) 777-88-77 </p>
								</ListGroupItem>
								<ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
									<span>
										<i className='ri-mail-line'></i>
										<p>Saturnsky2.4@gmail.com</p>
									</span>
								</ListGroupItem>
								<ListGroupItem className='ps-0 border-0'>
									<div className='websites__callback'>
										<motion.a
											whileHover={{ scale: 1.5 }}
											className='logo__github'
											href='https://github.com/RayStore/4p22-frontend-ravil-utemishev'
											rel='nofollow noopener noreferrer'
											target='_blank'
										>
											<span className='gitHub img'>
												<i className='ri-github-fill'></i>
											</span>
										</motion.a>
										<motion.a
											whileHover={{ scale: 1.5 }}
											href='https://vk.com/ravuteam'
											className='logo__vk'
											rel='nofollow noopener noreferrer'
											target='_blank'
										>
											<Icon24LogoVkColor />
										</motion.a>
										<motion.a
											whileHover={{ scale: 1.5 }}
											className='logo__telegram'
											href='https://t.me/RavilUt'
											rel='nofollow noopener noreferrer'
											target='_blank'
										>
											<i className='ri-telegram-fill'></i>
										</motion.a>
									</div>
								</ListGroupItem>
							</ListGroup>
						</div>
					</Col>

					<Col lg='12'>
						<p className='footer__copyright'>Copiright© {year} developed by RayStore inc. All rights reserved</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
