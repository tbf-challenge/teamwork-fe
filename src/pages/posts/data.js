import Solange from "../../Assets/images/User Profile.png";
import Vert from "../../Assets/images/more-vertical.svg";
import Bee from "../../Assets/image 3.svg";
import Image2 from "../../Assets/image 2.svg";
import Image3 from "../../Assets/aderayopost.svg";
import Image1 from "../../Assets/delepost.svg";
import Image4 from "../../Assets/jamespost.svg";
import Image5 from "../../Assets/Article Image.svg";

const userPosts = [
  {
    id: 1,
    userPhoto: Solange,
    name: "Solange Spencer",
    userHandle: "@ASA",
    publishedDate: "Published on 30th July, 2022",
    editedDate: "Last edited 10 days ago",
    heading: "Human-Centered Design Is Broken. Here’s a Better Alternative",
    message: "Hear me out for a second: What if we tried bee-centered design?",
    draftMessage: "We all know that leaders need vision and energy. But to be inspirational, leaders need four other qu...",
    draftHeading: "Why Should Anyone Be Led by You? ",
    draftImage: Image1,
    imagePost: Bee,
    icon: Vert,
    categories: "UX",
    time: "6 mins read",
    like: 24,
    comment: 1
  },
  {
    id: 2,
    userPhoto: Solange,
    name: "Solange Spencer",
    userHandle: "@ASA",
    publishedDate: "Published on 30th July, 2022",
    editedDate: "Created 2 months ago",
    heading: "How To Write Effective Software Release Notes That Delight Users",
    message: "What are good software release notes? I shared the key components and examples of what works or d...",
    draftMessage: "The Bitcon conference is kicking off tomorrow.",
    draftHeading: "",
    draftImage: Image4,
    imagePost: Image2,
    icon: Vert,
    categories: "Business",
    time: "10 mins read",
    like: 24,
    comment: 1
  },
  {
    id: 3,
    userPhoto: Solange,
    name: "Solange Spencer",
    userHandle: "@ASA",
    publishedDate: "Published on 30th July, 2022",
    editedDate: "Last edited 2 months ago",
    // heading: "Human-Centered Design Is Broken. Here’s a Better Alternative",
    message: "Reminiscing about Product Dive community meet up, It was so colorful 🎨   ",
    draftMessage: "When running a successful small business, there will always be room for improvement.",
    draftHeading: "How Different Industries Can Use a Small Business Loan",
    draftImage: Image5,
    imagePost: Image3,
    icon: Vert,
    categories: "Event",
    time: "",
    like: 200,
    comment: 51
  }
];

export default userPosts;
