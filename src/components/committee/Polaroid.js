import "./Polaroid.css";

const Polaroid = ({
  image,
  nickname,
  name,
  major,
  team,
  isLeft,
  isLast,
  setCardState,
}) => {
  const handleClick = () => {
    setCardState({
      visible: true,
      image: image,
      nickname: nickname,
      name: name,
      major: major,
      team: team,
    });
  };

  const polaroidStyle = {};
  if (isLast) {
    polaroidStyle.marginLeft = "auto";
    polaroidStyle.marginRight = "auto";
  } else if (isLeft) polaroidStyle.marginLeft = "auto";
  else polaroidStyle.marginRight = "auto";

  return (
    <div
      className="polaroid items-center justify-center"
      style={{ ...polaroidStyle, cursor: "pointer" }}
      onClick={handleClick}
    >
      <div className="polaroid-image">
        {/* <img
          src={require(`../../../public/images/TOPS/${image}`)}
          alt={name}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        /> */}
        <img
          src={require(`../../../public/images/${
            team === "POLOG"
              ? "POLOG"
              : team === "TOPS"
              ? "TOPS"
              : team === "WELFARE"
              ? "WELFARE"
              : team === "BFM"
              ? "BFM"
              : team === "PPIT"
              ? "PPIT"
              : team === "GL"
              ? "GL"
              : ""
          }/${image}`)}
          alt={name}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>

      <div className="polaroid-name">{nickname}</div>
    </div>
  );
};

export default Polaroid;
