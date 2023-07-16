const Error = () => {
  return (
    <div className="home">
      <div className="navigationContainer">
        {/* First section */}
        <div
          className="w-full h-[85vh] md:h-screen relative bg-[#190F3E] rounded-br-[150px] md:rounded-br-[300px] overflow-hidden"
          style={{ boxShadow: "0px 0px 100px rgba(255,255,255,0.30)" }}
        >
          <div
            className="w-full h-screen relative flex flex-column items-center justify-center"
            id="storyline"
          >
            <h1
              className="text-center text-white text-8xl md:text-9xl md:text-9xl mb-5"
              style={{ fontFamily: "InsideOut" }}
            >
              404
            </h1>
            <h1
              className="text-center text-white text-4xl md:text-5xl md:text-5xl mb-5"
              style={{ fontFamily: "InsideOut" }}
            >
              Page Not Found
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
