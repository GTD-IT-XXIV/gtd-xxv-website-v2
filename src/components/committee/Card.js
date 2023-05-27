import { XMarkIcon } from '@heroicons/react/20/solid';
import "./Card.css"

const Card = ({cardState, setCardState}) => {
    if(!cardState.visible) return null;
    return (
        <div className="committee-card">
            <div className="close-button"> 
                <button onClick={() => setCardState({visible: false})}> 
                    X {/* <XMarkIcon className="icon" /> */}
                </button>
            </div>
            <div className="card-image">
                <img
                    src={require(`./img/${cardState.image}`)}
                    alt={cardState.name}
                />
            </div>
            <div className="card-text">
                <div className="card-row">
                    <div className="card-points"> Name: </div>
                    <div className="card-description"> {cardState.name} </div>
                </div>

                <div className="card-row">
                    <div className="card-points"> Year/Jurusan: </div>
                    <div className="card-description"> {cardState.year}/{cardState.major} </div>
                </div>
                
                <div className="card-row">
                    <div className="card-points"> Kata-kata emas: </div>
                    <div className="card-description"> {cardState.quote} </div>
                </div>
            </div>
        </div>
    )
}

export default Card;