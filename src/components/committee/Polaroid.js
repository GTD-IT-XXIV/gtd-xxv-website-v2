import "./Polaroid.css";

const Polaroid = ({image, name, year, major, quote, isLeft, setCardState}) => {
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
    
    const polaroidStyle = {}
    if (isLeft) polaroidStyle.marginLeft = "auto";
    else polaroidStyle.marginRight = "auto";
    
    return (
        <div className="polaroid items-center justify-center" 
            style={{...polaroidStyle, cursor: "pointer"}} 
            onClick={handleClick}>
            
            <div className="polaroid-image">
                <img
                    src={require(`./img/${image}`)}
                    alt={name}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
            </div>

            <div className="polaroid-name"> 
                {name} 
            </div>
        </div>
    );
}

export default Polaroid;