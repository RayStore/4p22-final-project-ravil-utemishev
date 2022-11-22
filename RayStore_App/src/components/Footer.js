import React from "react";

export default function Footer() {
    return (
        <footer className="footer">
            <address className="footer__contacts">
                <div>
                    <a href="mailto:RayStorm@gmail.com">Email</a>
                </div>
                <div>
                    <a href="tel:+78007888877">Телефон</a>
                </div>
            </address>
            <p className="footer__copyright"> © Copyright 2022 Ray Autoparts</p>
            <p></p>
            <div className="feedback">
                <a className="feedback__icon" alt="vk" href="https://vk.com/" rel="nofollow noopener noreferrer" target="_blank"><img src="./img/VK.png" height="40" width="40" alt="VK" /></a>
                <a className="feedback__icon" alt="github" href="https://github.com/" rel="nofollow noopener noreferrer" target="_blank"><img src="./icons/github.png" height="40" width="40" alt="gitHub" /></a>
            </div>
        </footer>
    );
};

