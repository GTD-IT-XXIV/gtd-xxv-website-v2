import "./about.css";
import "../../index.css"
import { Margin } from "@mui/icons-material";

const About = () => {
  return (
    <div className="aboutUs backgroundColor">
      <div className="navigationContainer">
        <div className="blueCurve">
          <p style={{fontFamily: "InsideOut"}} className="header">About us</p>

          <div className="aboutUsImage">
          // Insert image here
          </div>

          <div className="textContainer">
            <p style={{fontFamily: "Lato-Regular"}} className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          <p style={{fontFamily: "InsideOut"}} className="header">Follow us on social media</p>

          <div className="socialMediaContainer">
          // Insert social media icons and text links here
          </div>

          <p style={{fontFamily: "InsideOut"}} className="header">Check out our sponsor</p>
          <div className="sponsorContainer">
          // Insert sponsor logo here
          </div>
          <div className="sponsorContainer">
          // Insert sponsor logo here
          </div>

          <p style={{fontFamily: "InsideOut", marginTop: "150px"}} className="header">Anthem</p>
          <div className="anthemContainer">
          // Insert anthem here
          </div>
          <div className="anthemTextContainer">
            <p style={{fontFamily: "Lato-Regular"}} className="body">
             Lorem ipsum dolor sit amet, consectetur adipsicing elit.<br></br>
             Integer et magna in orchi placerat aliquam sit amet a lacus.<br></br>
             Vestibulum dapibus nisi sit amet mattis dapibus.<br></br>
            </p>

            <p style={{fontFamily: "Lato-Regular", marginBottom: "200px"}} className="body">
             Proin a metus scelerisque, malesuada neque id, ultricies mi.<br></br>
             Nunc pharetra velit sit amet dui vehicula, et pellentesque nibh rutrum.<br></br>
             Ut luctus metus sit amet felis aliquam, quis varius tortor elementum.<br></br>
             Donec eget nisl at nunc mollis tristique.
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
