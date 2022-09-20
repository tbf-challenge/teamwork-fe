import { Link } from "react-router-dom";
import LandingPageConatainer from "./landingPageStyle";

const LandingPage = () => {
  return (
    <LandingPageConatainer>
      <div className="head">
        this is the landing Landing Page
        <Link to="/dashboard">
          <div className="link">Go to dashboard</div>
        </Link>
      </div>
    </LandingPageConatainer>
  );
};

export default LandingPage;
