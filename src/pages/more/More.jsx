import MoreStyles from "./moreStyles";
import EmployeeGrid from "../../components/grid/EmployeeGridBox";
import EmployeesData from "../employees/data";
import myimg from "../../Assets/Avatar.svg";

const More = () => {
  return (
    <MoreStyles>
      {EmployeesData.map(
        ({
          fullName, username, department, jobRole, status, img
        }) => (
          <EmployeeGrid
            fullName={fullName}
            username={username}
            department={department}
            jobRole={jobRole}
            status={status}
            imgSrc={myimg}
            img={img}
          />
        )
      )}
    </MoreStyles>
  );
};

export default More;
