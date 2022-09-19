import Styled from "./reports.styles";
import { ReactComponent as MoreSvg } from "../../Assets/images/more-vertical.svg";

const {
  CardsContainer, Card
} = Styled;

const CardsSection = ({ data }) => {
  return (
    <CardsContainer>
      {data.map(({
        id, user, reports, date
      }) => {
        const items = [
          { idx: "0", name: "Username", desc: user.username },
          { idx: "1", name: "No. of Reports", desc: reports.amount },
          { idx: "2", name: "Report type", desc: reports.type },
          { idx: "3", name: "Date", desc: date }
        ];

        return (
          <Card.Wrapper key={id}>
            <Card.Heading>
              <div>
                <img src={user.profileImg} alt={user.username} />
              </div>
              <span>{user.fullname}</span>
              <button type="button" title="more">
                <MoreSvg />
              </button>
            </Card.Heading>

            <Card.Body>
              {items.map(({ idx, name, desc }) => (
                <Card.Item key={idx}>
                  <h5>{name}</h5>
                  <span>{desc}</span>
                </Card.Item>
              ))}
            </Card.Body>
          </Card.Wrapper>
        );
      })}
    </CardsContainer>
  );
};

export default CardsSection;
