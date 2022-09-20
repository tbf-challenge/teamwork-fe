import EmployeeListStyle, { ListWrap } from "./EmployeeListStyleBox";
import myimg from "../../../Assets/Avatar.svg";
import Dots from "../../dots/Dots";

const EmployeeList = ({ data }) => {
  return (
    <ListWrap>
      <div className="boxes">
        {data.map((value) => (
          <li className="body box">
            <img src={myimg} alt={value.img} />
            <div className="name">
              <p>{value.fullName}</p>
              <p>{value.username}</p>
            </div>
            <div className="position">
              <p>{value.department}</p>
              <p>{value.jobRole}</p>
            </div>
          </li>
        ))}
      </div>
      <EmployeeListStyle>
        {data.map((value) => (
          <li className="body grid">
            <div className="card_body">
              <div className="card_head">
                <div className="body_title">
                  <img src={myimg} alt={value.img} />
                </div>
                <div className="body_title body_head">
                  <h4>{value.fullName}</h4>
                  <p>{value.username}</p>
                </div>
              </div>
              <div className="card_head card_title">
                <div className="body_title">
                  <p>{value.department}</p>
                </div>
                <p>|</p>
                <div className="body_title">
                  <p>{value.jobRole}</p>
                </div>
              </div>
            </div>
            <Dots />
          </li>
        ))}
      </EmployeeListStyle>
    </ListWrap>
  );
};

export default EmployeeList;
