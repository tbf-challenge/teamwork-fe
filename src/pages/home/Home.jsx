import RightCategories from "../../components/rightbar/RightCategories";
import { HomeStyles } from "./home.styles";
import HomeDemo from "./HomeDemo";

const Home = () => {
  return (
    <HomeStyles className="mainSection">
      <HomeDemo />
      <RightCategories />
    </HomeStyles>

  );
};

export default Home;
