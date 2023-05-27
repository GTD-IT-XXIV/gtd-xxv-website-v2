import "./Polaroid.css";

const Polaroid = ({image, name, year, major, quote, setCardState}) => {
    const handleClick = () => {
        setCardState({
            visible: true,
            image: image,
            name: name,
            year: year,
            major: major,
            quote: quote,
        });
    };
    
    return (
        <div className="polaroid" onClick={handleClick}>
            <div className="polaroid-image">
                <img
                    src={require(`./img/${image}`)}
                    alt={name}
                />
            </div>
            <div className="polaroid-name"> {name} </div>
        </div>
    );
}

export default Polaroid;