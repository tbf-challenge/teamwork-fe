import Solange from "../../Assets/images/User Profile.png";
import Vert from "../../Assets/images/more-vertical.svg";
import Bee from "../../Assets/image 3.svg";
import Image2 from "../../Assets/image 2.svg";
import Image3 from "../../Assets/aderayopost.svg";

const userPosts = [
  {
    id: 1,
    userPhoto: Solange,
    name: "Solange Spencer",
    userHandle: "@ASA",
    publishedDate: "Published on 30th July, 2022",
    heading: "Human-Centered Design Is Broken. Here’s a Better Alternative",
    message: "Hear me out for a second: What if we tried bee-centered design?",
    imagePost: Bee,
    icon: Vert
  },
  {
    id: 2,
    userPhoto: Solange,
    name: "Solange Spencer",
    userHandle: "@ASA",
    publishedDate: "Published on 30th July, 2022",
    heading: "How To Write Effective Software Release Notes That Delight Users",
    message: "What are good software release notes? I shared the key components and examples of what works or d...",
    imagePost: Image2,
    icon: Vert
  },
  {
    id: 3,
    userPhoto: Solange,
    name: "Solange Spencer",
    userHandle: "@ASA",
    publishedDate: "Published on 30th July, 2022",
    // heading: "Human-Centered Design Is Broken. Here’s a Better Alternative",
    message: "Reminiscing about Product Dive community meet up, It was so colorful 🎨   ",
    imagePost: Image3,
    icon: Vert
  }
];

export default userPosts;
