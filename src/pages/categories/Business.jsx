import CategoryTopbar from "./CategoryTopbar";
import { CategoriesStyles } from "./categories.styles";
import { HomeStyles } from "../home/home.styles";
import BusinessCategories from "./BusinessCategories";

const Business = () => {
  return (
    <CategoriesStyles>
      <HomeStyles>
        <CategoryTopbar />
        <BusinessCategories />
      </HomeStyles>
    </CategoriesStyles>
  );
};

export default Business;
