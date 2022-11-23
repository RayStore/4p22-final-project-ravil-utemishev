import React from 'react';

export default function Header() {
    return (
        <header className="header">
            <div className="header__logotype">

                <span className="logo">Ray Autoparts
                    <img src="./public/logo_2" alt="logotype"></img>
                </span>
                <ul className="navigate">
                    <li>О нас</li>
                    <li>Новости</li>
                    <li>Контакты</li>
                    <li>Регистрация</li>
                    <li>Вход</li>
                    <li>Корзина<img></img></li>
                </ul>
            </div>
            <div className="presentation"></div>
        </header>
    )
}
