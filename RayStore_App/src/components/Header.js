import React from 'react'

export default function Header() {
    return (
        <header>
            <div>
                <span className='logo'>Ray Autoparts</span>
                <ul className='navigate'>
                    <li>О нас</li>
                    <li>Новости</li>
                    <li>Контакты</li>
                    <li>Регистрация</li>
                    <li>Вход</li>

                </ul>
            </div>
            <div className='presentation'></div>
        </header>
    )
}

