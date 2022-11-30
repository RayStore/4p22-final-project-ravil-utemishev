import './Card.css';
// import Button from '../Button/Button';

function Card(props) {
    return (
        <div className="Card">
            <img className="Card-img" src={ props.img } alt="autopart"></img>
            <div className="Card-container">
                <h2 className="Card-title">{ props.title }</h2>
                <p className="Card-descriprion">{ props.description }</p>
                {/* <Button text="Купить"/> */}
            </div>
        </div>
        )
    }

export default Card;