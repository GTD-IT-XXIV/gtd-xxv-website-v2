import "../../index.css";
import instagram from "./images/instagram.svg";
import linkedin from "./images/linkedin.svg";
import "./about.css";
const About = () => {
  return (
    <div class="bg-gradient-to-b from-[#3F2E7C] to-[#7E4081]">
      <div className="navigationContainer">
        <div class="mx-auto py-10 flex-none">
          <p
            style={{ fontFamily: "InsideOut" }}
            class="text-3xl md:text-5xl text-white text-center"
          >
            About us
          </p>
          {/* 
          <div class="sm:max-md:w-4/5 md:w-[500px] h-full mx-auto rounded-xl bg-gray-300">
            <img
              class="w-full h-full object-cover rounded-xl"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
            ></img>
          </div> */}

          <div class="mx-auto py-2 md:w-[750px]">
            <p
              style={{ fontFamily: "Lato-Regular" }}
              class="text-sm text-white p-4 md:p-3 pt-4 pb-2 text-center md:text-lg"
            >
              Get Together Day (GTD) is a Freshmen Orientation Camp that is held
              every year to welcome Indonesian freshmen who will pursue their
              higher education at NTU. GTD is managed and run by students who
              voluntarily support the event. Through its 25 years of existence,
              GTD has been fulfilling its mission to familiarise freshmen with
              Singapore and to integrate them with the Indonesian community in
              NTU.
            </p>{" "}
            <p
              style={{ fontFamily: "Lato-Regular" }}
              class="text-sm text-white p-4 md:p-3 pt-4 pb-2 text-center md:text-lg"
            >
              As an orientation camp, GTD is usually held a week before the
              school term starts. The event lasts for 4 days and is conducted
              fully offline while still adhering local regulation. Throughout
              GTD, participants will play games that brings a lively and
              welcoming atmosphere among themselves and their peers.
            </p>
            <p
              style={{ fontFamily: "Lato-Regular" }}
              class="text-sm text-white p-4 md:p-3 pt-4 pb-2 text-center md:text-lg"
            >
              Unlike most stereotypical examples of Indonesian orientation
              (seniority and hazing activities or perploncoan), GTD is designed
              and specially planned for freshmen to bond with their fellow
              freshies and seniors. The orientation group (also known as OG)
              will be your first family in Singapore, before you get to know
              your course mates. With the exciting games made by the committee,
              freshmen will get the chance to mingle with their Indonesian
              cohorts in NTU and to have great fun, all at the same time.
            </p>
          </div>

          <div class="mx-auto py-10">
            <p
              style={{ fontFamily: "InsideOut" }}
              class="text-3xl md:text-5xl text-white text-center"
            >
              Follow us on social media
            </p>

            <div class="mx-auto md:mb-[50px] md:mt-[30px] sm:max-md:w-4/5 md:w-[500px] rounded-xl">
              <a href="https://www.instagram.com/pintugtd/">
                <img
                  src={instagram}
                  class="h-full w-full mx-auto md:scale-[120%]"
                ></img>
              </a>
            </div>

            <div class="mx-auto mt-[20px] sm:max-md:w-4/5 md:w-[500px] rounded-xl">
              <a href="https://www.linkedin.com/company/pintu-gtd/">
                <img
                  src={linkedin}
                  class="h-full w-full mx-auto md:scale-[120%]"
                ></img>
              </a>
            </div>
          </div>

          <div class="mx-auto py-20">
            <p
              style={{ fontFamily: "InsideOut" }}
              class="text-3xl md:text-5xl text-white text-center "
            >
              Anthem
            </p>
            {/* <div class="mx-auto flex sm:max-md:w-[80%] sm:max-md:h-[130px] md:w-[550px] md:h-[170px] bg-gray-300 rounded-xl">
              // Insert anthem here
            </div> */}
            <div class="mx-auto ">
              <p
                style={{ fontFamily: "Lato-Regular" }}
                class="text-sm text-white p-4 md:p-3 pt-4 pb-2 text-center md:text-lg"
              >
                From different places, different times
                <br></br>
                With a common goal in our mind
                <br></br>
                We want to enjoy this moment while it lasts
                <br></br>
                Have you ever stopped and wonder why
                <br></br>
                That now we can share a common sky
                <br></br>
                So many of us with different childhoods
                <br></br>
                Different dreams, different lives
                <br></br>
              </p>

              <p
                style={{ fontFamily: "Lato-Regular" }}
                class="text-sm text-white p-4 md:p-3 pt-0 text-center md:text-lg  "
              >
                <text class="font-bold my-0">Chorus :</text> <br></br> <br></br>
                I know now what the answer is
                <br></br>
                I’m sure I’m gonna miss
                <br></br>
                This special day when we get together
                <br></br>
                As clouds drift and seasons flee
                <br></br>
                We will probably not meet
                <br></br>
                And different lives we’ll live
                <br></br>
                No once we’ll forget this great day we have
                <br></br>
              </p>
            </div>
            <div class="center">
              <iframe
                width="80%"
                height="166"
                frameborder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/455672094&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
