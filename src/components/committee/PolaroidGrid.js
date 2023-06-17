import Polaroid from "./Polaroid";

const PolaroidGrid = ({polaroids, setCardState}) => {
    return (
        <div className="polaroid-grid grid grid-cols-2 gap-4 items-center" 
            style={{ width: "70vw", margin: "auto"}}>
                
            {polaroids.map((polaroid, index) => {
                    return (
                        <div key={index}>
                            <Polaroid
                                key={index}
                                image={polaroid.image}
                                name={polaroid.name}
                                year={polaroid.year}
                                major={polaroid.major}
                                quote={polaroid.quote}
                                setCardState={setCardState}
                                isLeft={index % 2 === 0}
                            />
                        </div>
                    );
            })}
        </div>
    );
}

export default PolaroidGrid;