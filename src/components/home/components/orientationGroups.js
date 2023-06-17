import "./orientation.css";
import fear from "../../../assets/img/home/fear.webp";
import anger from "../../../assets/img/home/anger.webp";
import disgust from "../../../assets/img/home/disgust.webp";
import sadness from "../../../assets/img/home/sadness.webp";

const OrientationGroups = () => {
  return (
    <div className="w-1/2 max-w-[650px] aspect-square relative">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#EA9F95] rounded-tl-xl hover:rounded-xl p-2 hover-animation hover:scale-110 hover:z-10">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat rounded-tl-xl"
          style={{ backgroundImage: `url(${anger})` }}
        />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#CBEDFD] rounded-tr-xl hover:rounded-xl p-2 hover-animation hover:scale-110 hover:z-10">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat rounded-tr-xl"
          style={{ backgroundImage: `url(${sadness})` }}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#E4CAE6] rounded-bl-xl hover:rounded-xl p-2 hover-animation hover:scale-110 hover:z-10" onAnimationStart={() => console.log('test')}>
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat rounded-bl-xl"
          style={{ backgroundImage: `url(${fear})` }}
        />
      </div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#D0F29F] rounded-br-xl hover:rounded-xl p-2 hover-animation hover:scale-110 hover:z-10">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat rounded-br-xl"
          style={{ backgroundImage: `url(${disgust})` }}
        />
      </div>
    </div>
  );
};

export default OrientationGroups;
