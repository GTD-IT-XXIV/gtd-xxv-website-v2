import "../../index.css"
import instagram from "./images/instagram.svg"
import linkedin from "./images/linkedin.svg"


const About = () => {
  return (
    <div class="bg-gradient-to-b from-[#3F2E7C] to-[#7E4081]">
      <div className="navigationContainer">
        <div class="mx-auto py-10 flex-none">
          <p style={{fontFamily: "InsideOut"}} class="text-3xl md:text-5xl text-white text-center">About us</p>

          <div class="sm:max-md:w-4/5 md:w-[500px] h-full mx-auto rounded-xl bg-gray-300">
            <img class="w-full h-full object-cover rounded-xl" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"></img>
          </div>

          <div class="mx-auto py-2 md:w-[750px]">
            <p style={{fontFamily: "Lato-Regular"}} class="text-md text-white p-3 text-center md:text-lg ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          <div class="mx-auto py-10">
            <p style={{fontFamily: "InsideOut"}} class="text-3xl md:text-5xl text-white text-center">Follow us on social media</p>

            <div class="mx-auto md:mb-[50px] md:mt-[30px] sm:max-md:w-4/5 md:w-[500px] rounded-xl">
              <a href="https://www.instagram.com/pintugtd/">
                <img src={instagram} class="h-full w-full mx-auto md:scale-[120%]"></img>
              </a>
            </div>

            <div class="mx-auto mt-[20px] sm:max-md:w-4/5 md:w-[500px] rounded-xl">
              <a href="https://www.linkedin.com/company/pintu-gtd/">
                <img src={linkedin} class="h-full w-full mx-auto md:scale-[120%]"></img>
              </a>
            </div>
          </div>

          <div class="mx-auto py-10">
            <p style={{fontFamily: "InsideOut"}} class="text-3xl md:text-5xl text-white text-center">Check out our sponsor</p>
            <div class="mx-auto mb-10 flex sm:max-md:w-[80%] sm:max-md:h-[130px] md:w-[550px] md:h-[170px] bg-gray-300 rounded-xl">
            // Insert sponsor logo here
            </div>
            
            <div class="mx-auto mb-10 flex sm:max-md:w-[80%] sm:max-md:h-[130px] md:w-[550px] md:h-[170px] bg-gray-300 rounded-xl">
            // Insert sponsor logo here
            </div>
          </div>

          <div class="mx-auto">
            <p style={{fontFamily: "InsideOut"}} class="text-3xl md:text-5xl text-white text-center">Anthem</p>
            <div class="mx-auto flex sm:max-md:w-[80%] sm:max-md:h-[130px] md:w-[550px] md:h-[170px] bg-gray-300 rounded-xl">
            // Insert anthem here
            </div>
            <div class="mx-auto">
              <p style={{fontFamily: "Lato-Regular"}} class="text-md text-white p-3 pt-4 pb-2 text-center md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipsicing elit.<br></br>
              Integer et magna in orchi placerat aliquam sit amet a lacus.<br></br>
              Vestibulum dapibus nisi sit amet mattis dapibus.<br></br>
              </p>

              <p style={{fontFamily: "Lato-Regular"}} class="text-md text-white p-3 pt-0 text-center md:text-lg">
              Proin a metus scelerisque, malesuada neque id, ultricies mi.<br></br>
              Nunc pharetra velit sit amet dui vehicula, et pellentesque nibh rutrum.<br></br>
              Ut luctus metus sit amet felis aliquam, quis varius tortor elementum.<br></br>
              Donec eget nisl at nunc mollis tristique.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
