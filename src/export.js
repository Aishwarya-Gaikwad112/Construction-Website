import building from "../src/assets/building.svg";
import construction from "../src/assets/construction.svg";
import design from "../src/assets/design.svg";
import document from "../src/assets/document.svg";
import paint from "../src/assets/paint.svg";
import support from "../src/assets/support.svg";

import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

import client1 from "../src/assets/client1.png";
import client2 from "../src/assets/client2.png";
import client3 from "../src/assets/client3.png";

export const allservices = [
  {
    icon: building,
    title: "BUILDING RENOVATION",
    about:
      "We specialize in transforming existing structures into modern, functional spaces while maintaining their original charm.",
  },
  {
    icon: construction,
    title: "CONSTRUCTION SERVICES",
    about:
    "From concept to completion, we provide comprehensive construction solutions tailored to your needs.",
  },
  {
    icon: design,
    title: "DESIGN & PLANNING",
    about:
    "Our expert team ensures that every project is meticulously designed and planned for seamless execution.",

  },
  {
    icon: document,
    title: "DOCUMENTATION",
    about:
    "We offer thorough documentation services to streamline your project management and compliance needs.",
  },
  {
    icon: paint,
    title: "INTERIOR DESIGN",
    about:
      "Create stunning interiors that reflect your personality and enhance the functionality of your spaces.",

  },
  {
    icon: support,
    title: "CUSTOMER SUPPORT",
    about:
      "Our dedicated support team is here to assist you every step of the way, ensuring a smooth experience.",

  },
];

export const planning = [
  {
    icon: IoDocumentTextSharp,
    title: "planning",
    about:
    "We provide strategic planning services to ensure your project is set up for success.",

  },
  {
    icon: MdOutlineDesignServices,
    title: "design",
    about:
   "Our creative designs bring your vision to life, blending aesthetics with practicality.",


  },
  {
    icon: FaRegBuilding,
    title: "building",
    about:
    "We deliver high-quality construction solutions, focusing on durability and efficiency.",

  },
  {
    icon: FaSitemap,
    title: "finish",
    about:
    "Our finishing services add the final touches, ensuring your project exceeds expectations.",

  },
];

export const clients = [
  {
    image: client1,
    name: "Alex Parker",
    about:
      "Alex is a seasoned constructor with over 10 years of experience in building state-of-the-art facilities.",
    post: "Constructor",

  },
  {
    image: client2,
    name: "Drew James",
    about:
      "Drew is an award-winning architect known for designing innovative and sustainable buildings.",

    post: "Architect",
  },
  {
    image: client3,
    name: "Sam Peterson",
    about:
      "Sam has a proven track record of managing large-scale building projects with exceptional results.",

    post: "Builder",
  },
];
