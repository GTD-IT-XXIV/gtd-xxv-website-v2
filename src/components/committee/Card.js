import "./Card.css";

const Card = ({ cardState, setCardState }) => {
  if (!cardState.visible) return null;
  return (
    <div className="committee-card">
      <div className="close-button">
        <button onClick={() => setCardState({ visible: false })}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="card-image">
        {/* <img
          src={require(`../../../public/images/${cardState.image}`)}
          alt={cardState.name}
        /> */}
        {/* <img
          src={require(`../../../public/images/TOPS/${cardState.image}`)}
          alt={cardState.name}
        /> */}
        <img
          src={require(`../../../public/images/${
            cardState.team === "POLOG"
              ? "POLOG"
              : cardState.team === "TOPS"
              ? "TOPS"
              : cardState.team === "WELFARE"
              ? "WELFARE"
              : cardState.team === "BFM"
              ? "BFM"
              : cardState.team === "PPIT"
              ? "PPIT"
              : cardState.team === "GL"
              ? "GL"
              : ""
          }/${cardState.image}`)}
          alt={cardState.name}
        />
      </div>
      <div className="card-text">
        <div className="card-row">
          <div className="card-points"> Name: </div>
          <div className="card-description"> {cardState.name} </div>
        </div>

        <div className="card-row">
          <div className="card-points"> Jurusan/Year: </div>
          <div className="card-description"> {cardState.major} </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
