import data from "./reports.data.json";
import userPic from "../../Assets/images/User Profile.png";
import articleImg from "../../Assets/images/article_1.png";
import user1 from "../../Assets/jida.png";
import user2 from "../../Assets/segadu.png";
import user3 from "../../Assets/carl.svg";
import user4 from "../../Assets/aderayo.svg";

const reporters = [
  { id: "0", url: user1 },
  { id: "1", url: user2 },
  { id: "2", url: user3 },
  { id: "3", url: user4 }
];

const badgeMap = new Map([
  ["Harrassment", "Error"],
  ["Abusive Behaviour", "Secondary"],
  ["Rule Violation", "Gray"],
  ["Spasm", "Warning"]
]);

export {
  reporters, badgeMap, data, userPic, articleImg
};
