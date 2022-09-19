import EmployeeListStyle, { ListWrap } from "./EmployeeListStyleBox";
import myimg from "../../../Assets/Avatar.svg";
import Dots from "../../dots/Dots";

const EmployeeList = ({ data, headers }) => {
  return (
    <ListWrap>
      <div className="boxes">
        {data.map(
          ({
            fullName, username, department, jobRole, status, img
          }) => (
            <li className="body box">
              <img src={myimg} alt={img} />
              <div className="name">
                <p>{fullName}</p>
                <p>{username}</p>
              </div>
              <div className="position">
                <p>{department}</p>
                <p>{jobRole}</p>
              </div>
              <div className="status">
                <p className={status === "Online" ? "online" : ""}>{status}</p>
              </div>
            </li>
          )
        )}
      </div>
      <li className="headers grid">
        {headers.map((item) => (
          <div key={item} className="header_title">
            <p>{item}</p>
          </div>
        ))}
      </li>
      <EmployeeListStyle>
        {data.map(
          ({
            fullName, username, department, jobRole, status, img
          }) => (
            <li className="body grid">
              <div className="body_title full_name">
                <img src={myimg} alt={img} />
                <p>{fullName}</p>
              </div>
              <div className="body_title">
                <p>{username}</p>
              </div>
              <div className="body_title">
                <p>{department}</p>
              </div>
              <div className="body_title">
                <p>{jobRole}</p>
              </div>
              <div className="body_title">
                <p className={status === "Online" ? "online" : ""}>{status}</p>
              </div>
              <Dots />
            </li>
          )
        )}
      </EmployeeListStyle>
    </ListWrap>
  );
};

export default EmployeeList;
