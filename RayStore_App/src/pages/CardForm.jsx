// import {Link} from "react-router-dom";

// export default function CardForm({cardApp=[]}) {
//     const finalCost = cardApp.reduce((sum, obj) => obj.cost + sum, 0);
 
// return(
    // <div className="partslist">
    //     <div className="partslist__categories-search"
    //         <h2 className="back-page">
    //             <Link to="/">
    //                 <img className="" width={20} height={20} src="./icons/rearrow" alt="rearrow"/> 
    //             </Link>
    //             Корзина покупок   
    //         </h2>
    //     </div>
    //     <div className="partslist__cards"
    //         {cardApp.map((obj) => (
    //             <div key={obj.id} className="partslist__card">
    //                 <img width={245} height={245} src={obj.urlPng} alt="autopart"/>
    //                 <p className="name_product">{obj.name}</p>
    //                 <div className="costbuy">
    //                     <p className="cost">Цена: {obj.cost} ₽;</p>
    //                 </div>
    //             </div>      
    //         ))}
    //     </div>
    //         <div className="cart-page-calculate">
    //             <span>Итог:</span>
    //             <b>{finalCost}</b>    
    //         </div>
    //         <div className="basket-page-part">
    //             <button onClick={() => alert ("Заказ находится в обработке. Статус скоро обновится")} className="basket-button">Заказать товар</button>
    //         </div>
    //     </div>
    // </div>
    // )
    
// };