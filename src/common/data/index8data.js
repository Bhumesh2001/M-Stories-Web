import image1 from "../../assets/images/213.jpg"
import image2 from "../../assets/images/313.jpg"
import image3 from "../../assets/images/410.jpg"
import image4 from "../../assets/images/510.jpg"
import image5 from "../../assets/images/67.jpg"
import image6 from "../../assets/images/124.jpg"

import news1 from "../../assets/images/layout-8/all-news-topics/01.jpg"
import news2 from "../../assets/images/layout-8/all-news-topics/02.jpg"
import news3 from "../../assets/images/layout-8/all-news-topics/03.jpg"
import topnews1 from "../../assets/images/layout-8/top-week-new/01.jpg"
import topnews2 from "../../assets/images/layout-8/top-week-new/02.jpg"
import topnews3 from "../../assets/images/layout-8/top-week-new/03.jpg"
import stories1 from "../../assets/images/138.jpg"
import stories2 from "../../assets/images/234.jpg"
import stories3 from "../../assets/images/332.jpg"
import stories4 from "../../assets/images/420.jpg"
import stories5 from "../../assets/images/144.jpg"
import stories6 from "../../assets/images/238.jpg"
import stories7 from "../../assets/images/334.jpg"
import stories8 from "../../assets/images/421.jpg"

const cardsData = [
  {
    category: "Lifestyle",
    image: image1,
    title: "Best Tech Accessories 10 Work From Home Essentials",
    author: "John Doe",
    timeAgo: "7 Months Ago",
    link: "/single-post",
  },
  {
    category: "Food",
    image: image2,
    title: "Best Tech Accessories 10 Work From Home Essentials",
    author: "John Doe",
    timeAgo: "7 Months Ago",
    link: "/single-post",
  },
  {
    category: "Furniture",
    image: image3,
    title: "Best Tech Accessories 10 Work From Home Essentials",
    author: "John Doe",
    timeAgo: "7 Months Ago",
    link: "/single-post",
  },
  {
    category: "Lifestyle",
    image: image4,
    title: "Best Tech Accessories 10 Work From Home Essentials",
    author: "John Doe",
    timeAgo: "7 Months Ago",
    link: "/single-post",
  },
  {
    category: "Food",
    image: image5,
    title: "Best Tech Accessories 10 Work From Home Essentials",
    author: "John Doe",
    timeAgo: "7 Months Ago",
    link: "/single-post",
  },
  {
    category: "Furniture",
    image: image6,
    title: "Best Tech Accessories 10 Work From Home Essentials",
    author: "John Doe",
    timeAgo: "7 Months Ago",
    link: "/single-post",
  },
]

const slides = [
  {
    id: 1,
    number: "01",
    category: "Travelling",
    title: "Mistakes Might Be Making With Your Watch",
    author: "John Doe",
    time: "7 Months Ago",
  },
  {
    id: 2,
    number: "02",
    category: "Travelling",
    title: "Will Humans Be Able To Live In Mars In Future?",
    author: "John Doe",
    time: "7 Months Ago",
  },
  {
    id: 3,
    number: "03",
    category: "Special",
    title: "Headsets Are Better If You’re Playing Games",
    author: "John Doe",
    time: "7 Months Ago",
  },
  {
    id: 4,
    number: "04",
    category: "Travelling",
    title: "Spicy Crispy Chicken In Burger Recipe",
    author: "John Doe",
    time: "7 Months Ago",
  },
  {
    id: 5,
    number: "05",
    category: "Travelling",
    title: "Spicy Crispy Chicken In Burger Recipe",
    author: "John Doe",
    time: "7 Months Ago",
  },
  {
    id: 6,
    number: "06",
    category: "Travelling",
    title: "Headsets Are Better If You’re Playing Games",
    author: "John Doe",
    time: "7 Months Ago",
  },
]

const newsTopics = [
  {
    id: 1,
    imgSrc: news1,
    category: "Tdrinks",
    links: [
      "The best Travel Apps: Streamlining Your The Journery Tours & Travelling",
      "The best Travel Apps: Streamlining Your The Journery Tours & Travelling",
      "The best Travel Apps: Streamlining Your The Journery Tours & Travelling",
    ],
  },
  {
    id: 2,
    imgSrc: news2,
    category: "Tdrinks",
    links: [
      "The best Travel Apps: Streamlining Your The Journery Tours & Travelling",
      "The best Travel Apps: Streamlining Your The Journery Tours & Travelling",
      "The best Travel Apps: Streamlining Your The Journery Tours & Travelling",
    ],
  },
  {
    id: 3,
    imgSrc: news3,
    category: "Tdrinks",
    links: [
      "The best Travel Apps: Streamlining Your The Journery Tours & Travelling",
      "The best Travel Apps: Streamlining Your The Journery Tours & Travelling",
      "The best Travel Apps: Streamlining Your The Journery Tours & Travelling",
    ],
  },
]

const newsItems = [
  {
    id: 1,
    imgSrc: topnews1,
    category: "Travelling",
    author: "John Doe",
    time: "7 Months Ago",
    title:
      "I have put a lot of my belief and faith energy in the vegan lifestyle",
    link: "single-post.html",
    description:
      "We offer pieces that cater to every style and occasion. Discover high-quality fabrics, innovative designs.",
  },
  {
    id: 2,
    imgSrc: topnews2,
    category: "Travelling",
    author: "John Doe",
    time: "7 Months Ago",
    title:
      "I have put a lot of my belief and faith energy in the vegan lifestyle",
    link: "single-post.html",
    description:
      "We offer pieces that cater to every style and occasion. Discover high-quality fabrics, innovative designs.",
  },
  {
    id: 3,
    imgSrc: topnews3,
    category: "Travelling",
    author: "John Doe",
    time: "7 Months Ago",
    title:
      "I have put a lot of my belief and faith energy in the vegan lifestyle",
    link: "single-post.html",
    description:
      "We offer pieces that cater to every style and occasion. Discover high-quality fabrics, innovative designs.",
  },
]

const topRatedNews = [
  {
    id: 1,
    category: "Lifestyle",
    color: "#3D82C6",
    title: "Metal Artifacts In SE Asia Challenge Long-Held Theory",
    author: "John Doe",
    time: "7 Months Ago",
    image: stories1,
  },
  {
    id: 2,
    category: "Fashion",
    color: "#4CAF50",
    title: "10 Strange Things Dogs Do And Why They Do Them",
    author: "John Doe",
    time: "7 Months Ago",
    image: stories2,
  },
  {
    id: 3,
    category: "Foods",
    color: "#007B8E",
    title: "Metal Artifacts In SE Asia Challenge Long-Held Theory",
    author: "John Doe",
    time: "7 Months Ago",
    image: stories3,
  },
  {
    id: 4,
    category: "Furniture",
    color: "#FFC107",
    title: "Metal Artifacts In SE Asia Challenge Long-Held Theory",
    author: "John Doe",
    time: "7 Months Ago",
    image: stories4,
  },
]

const hotRatedNews = [
  {
    id: 1,
    category: "Lifestyle",
    color: "#3D82C6",
    title: "Metal Artifacts In SE Asia Challenge Long-Held Theory",
    author: "John Doe",
    time: "7 Months Ago",
    image: stories5,
  },
  {
    id: 2,
    category: "Fashion",
    color: "#4CAF50",
    title: "10 Strange Things Dogs Do And Why They Do Them",
    author: "John Doe",
    time: "7 Months Ago",
    image: stories6,
  },
  {
    id: 3,
    category: "Foods",
    color: "#007B8E",
    title: "Metal Artifacts In SE Asia Challenge Long-Held Theory",
    author: "John Doe",
    time: "7 Months Ago",
    image: stories7,
  },
  {
    id: 4,
    category: "Furniture",
    color: "#FFC107",
    title: "Metal Artifacts In SE Asia Challenge Long-Held Theory",
    author: "John Doe",
    time: "7 Months Ago",
    image: stories8,
  },
]

const latestStory = [
  {
    id: 0,
    title: "The Power Of Big Data In The Fashion Decision Macking.",
  },
  {
    id: 1,
    title: "Best tech accessories 10 work from home essentials",
  },
  {
    id: 2,
    title: "The fashion trends and li edelkoort the culture shock",
  },
  {
    id: 3,
    title: "Festival style made a triumphant the fashion return",
  },
  {
    id: 4,
    title: "Festival style made a triumphant the fashion return",
  },
  {
    id: 5,
    title: "Festival style made a triumphant the fashion return",
  },
  {
    id: 6,
    title: "Festival style made a triumphant the fashion return",
  },
  {
    id: 7,
    title: "The Power Of Big Data In The Fashion Decision Making",
  },
]

export {
  cardsData,
  slides,
  newsTopics,
  newsItems,
  topRatedNews,
  hotRatedNews,
  latestStory,
}
