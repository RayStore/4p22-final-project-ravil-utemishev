import './Card.css';
// import Button from '../Button/Button';

function Card({img, title, name}) {
    return (
        <div className="Card">
            <img className="Card-img" src={ img } alt="autopart"></img>
            <div className="Card-container">
                <h2 className="Card-title">{ title }</h2>
                <p className="Card-descriprion">{ name }</p>
            </div>
        </div>
        )
    }

export default Card;