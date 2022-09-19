import CategoryTopbar from "./CategoryTopbar";
import { CategoriesStyles } from "./categories.styles";
import { HomeStyles } from "../home/home.styles";
import EventCategories from "./EventCategories";

const Business = () => {
  return (
    <CategoriesStyles>
      <CategoryTopbar />
      <HomeStyles>
        <EventCategories />
      </HomeStyles>
    </CategoriesStyles>
  );
};

export default Business;
