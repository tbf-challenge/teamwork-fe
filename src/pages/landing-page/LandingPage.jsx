import LandingPageConatainer from "./landingPageStyle";
import landing from "../../Assets/landing.png";
import Design from "../../Assets/Design.png";
import iframe from "../../Assets/Devices.png";

const LandingPage = () => {
  return (
    <LandingPageConatainer>
      <div className="container">
        <header>
          <div className="header">
            <div className="logo">
              <h4>
                logo
                <br />
                COMPANY NAME
              </h4>
            </div>
            <button type="button" className="btn">
              ADMIN ACCESS
            </button>
          </div>
        </header>
        <main>
          <div className="heading">
            <p>CONNECTING VIA SHARED-EXPERIENCED</p>
            <h1>
              SPARK CONVERSION & SHARE
              <br />
              MOMENTS WITH COLLEAGUES
            </h1>
          </div>
          <div>
            <img src={landing} alt="landing" className="landing" />
          </div>
          <div>
            <img src={Design} alt="design" className="design" />
          </div>
          <div>
            <img src={iframe} alt="frame" className="frame" />
          </div>
        </main>
        <footer>
          <div className="text">
            <p>Logo</p>
            <p>Companyname.copyright@2022</p>
          </div>
        </footer>
      </div>
    </LandingPageConatainer>
  );
};

export default LandingPage;
