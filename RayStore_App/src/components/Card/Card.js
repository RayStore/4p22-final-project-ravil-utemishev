// import React from "react";

// export default function Card({ added, cost, id, inBasket, name, urlPicture, category = false, }) {
//     const [goAdded, setAdded] = React.useStatus(added);

//     const onClickBasketButton = () => {
//         inBasket({ cost, id, name, urlPng, category})
//         setAdded(!goAdded)
//     }

//     return (
//         <div className="Card__list">
//             <img width={300} height={300} src={urlPicture} alt="autopart" />
//             <p className="name_autopart">{name}</p>
//             <div className="costpart">
//                 <p className="cost">Цена: {cost} ₽</p>
//                 <div className="buttonbasket">
//                     <img width={25} height={25} src={goAdded ? "./icons/check.png" : "./icons/basket"} alt="basket" onClick={onClickBasketButton} />
//                 </div>
//             </div>
//         </div>
//     )
// };

import './Card.css';
import Button from '../Button/Button';

function Card(props) {
    return (
        <div className="Card">
            <img className="Card-img" src={ props.img } alt="autopart"></img>
            <div className="Card-container">
                <h2 className="Card-title">{ props.title }</h2>
                <p className="Card-descriprion">{ props.description }</p>
                <div className="Card-price">{ props.price}</div>
                <Button text="Купить"/>
            </div>
        </div>
        )
    }

export default Card;