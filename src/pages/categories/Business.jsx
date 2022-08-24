import CategoryTopbar from "./CategoryTopbar";
import { CategoriesStyles } from "./categories.styles";
import { HomeStyles } from "../home/home.styles";
import BusinessCategories from "./BusinessCategories";

const Business = () => {
  return (
    <CategoriesStyles>
      <CategoryTopbar />
      <HomeStyles>
        <BusinessCategories />
      </HomeStyles>
    </CategoriesStyles>
  );
};

export default Business;
