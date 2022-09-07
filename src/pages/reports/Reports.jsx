import useWindowDimensions from "../../hooks/use-window-dimensions";
import Styled from "./reports.styles";
import CardsSection from "./CardsSection";
import TableSection from "./TableSection";
import { ReactComponent as BackSvg } from "../../Assets/images/Back.svg";
import { ReactComponent as DeleteSvg } from "../../Assets/images/delete_outline.svg";
import userPic from "../../Assets/images/User Profile.png";

const {
  Wrapper, Heading, BackButton, Typography, Body, Footer
} = Styled;

const data = [
  {
    id: "0", user: { username: "@blessed", fullname: "Blessing F", profileImg: userPic }, reports: { amount: 2, type: "Harmful speech" }, date: "08/08/2022"
  },
  {
    id: "1", user: { username: "@blessed", fullname: "Blessing F", profileImg: userPic }, reports: { amount: 4, type: "Harmful speech" }, date: "08/08/2022"
  },
  {
    id: "2", user: { username: "@blessed", fullname: "Blessing F", profileImg: userPic }, reports: { amount: 1, type: "Harmful speech" }, date: "08/08/2022"
  },
  {
    id: "3", user: { username: "@blessed", fullname: "Blessing F", profileImg: userPic }, reports: { amount: 1, type: "Harmful speech" }, date: "08/08/2022"
  },
  {
    id: "4", user: { username: "@blessed", fullname: "Blessing F", profileImg: userPic }, reports: { amount: 1, type: "Harmful speech" }, date: "08/08/2022"
  }
];

const Reports = () => {
  const { width } = useWindowDimensions();

  return (
    <Wrapper>
      {width < 578
        ? (
          <>
            <Heading>
              <BackButton type="button" title="back">
                <BackSvg />
              </BackButton>

              <Typography.NavH1>Reports</Typography.NavH1>
            </Heading>

            <CardsSection data={data} />
          </>
        )
        : (
          <>
            <TableSection data={data} />

            <Footer>
              <button type="button" title="delete reports">
                Delete Reports
                <DeleteSvg />
              </button>
            </Footer>
          </>
        )}
      <Body />
    </Wrapper>
  );
};

export default Reports;
