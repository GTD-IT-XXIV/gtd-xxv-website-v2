import Polaroid from "./Polaroid";

const PolaroidGrid = ({ polaroids, setCardState }) => {
  const isOdd = polaroids.length % 2 === 1;
  const lastPolaroid = polaroids[polaroids.length - 1];
  return (
    <>
      <div
        className="polaroid-grid grid grid-cols-2 gap-4 items-center"
        style={{ width: "70vw", margin: "auto" }}
      >
        {polaroids.map((polaroid, index) => {
          return isOdd && index === polaroids.length - 1 ? (
            <></>
          ) : (
            <div key={index}>
              <Polaroid
                key={index}
                image={polaroid.image}
                nickname={polaroid.nickname}
                name={polaroid.name}
                team={polaroid.team}
                major={polaroid.major}
                setCardState={setCardState}
                isLeft={index % 2 === 0}
                isLast={false}
              />
            </div>
          );
        })}
      </div>
      {isOdd ? (
        <div className="lastOddPolaroid m-4">
          <Polaroid
            image={lastPolaroid.image}
            nickname={lastPolaroid.nickname}
            name={lastPolaroid.name}
            team={lastPolaroid.team}
            major={lastPolaroid.major}
            setCardState={setCardState}
            isLeft={false}
            isLast={true}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default PolaroidGrid;
