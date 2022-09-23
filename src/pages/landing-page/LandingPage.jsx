import { Link } from "react-router-dom";
import LandingPageConatainer, { ImgDiv } from "./landingPageStyle";
import landing from "../../Assets/landing.png";
import Design from "../../Assets/Design.png";
import iframe from "../../Assets/Devices.png";

const LandingPage = () => {
  return (
    <LandingPageConatainer>
      <div className="container">
        <div className="header">
          <header>
            <div className="logo">
              <div className="img">
                <ImgDiv />
                <h4>logo</h4>
              </div>
              <h3> COMPANY NAME</h3>
            </div>
            <Link to="/dashboard" className="btn">
              _
            </Link>
          </header>
          <div className="heading">
            <p>CONNECTING VIA SHARED-EXPERIENCED</p>
            <h1>
              SPARK CONVERSION & SHARE
              <br />
              MOMENTS WITH COLLEAGUES
            </h1>
          </div>
        </div>

        <main>
          <div className="landingImage">
            <img src={landing} alt="landing" />
          </div>

          <div className="design">
            <img src={Design} alt="design" />
          </div>
          <div className="frame">
            <img src={iframe} alt="frame" />
          </div>
        </main>

        <footer>
          <div className="main">
            <div className="logo">
              <ImgDiv />
              <p>Logo</p>
            </div>
            <div className="text">
              <p>Companyname.copyright@2022</p>
            </div>
          </div>
        </footer>
      </div>
    </LandingPageConatainer>
  );
};

export default LandingPage;
