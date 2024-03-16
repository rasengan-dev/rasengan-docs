import { CardDataType } from "data/features";
import reactLogo from "data/foundations/images/react.svg";
import reactRouterLogo from "data/foundations/images/react-router.png";

export const FoundationsData: Array<CardDataType> = [
  {
    id: 1,
    title: "React",
    description:
      "The Library for web and native UI. Rasengan.js uses the power of React components to create high quality web applications.",
    image: "",
    logo: reactLogo,
    link: "https://react.dev",
    target: "_blanc"
  },
  {
    id: 2,
    title: "Vite",
    description: "Modern build tool, combines robustness and speed. Rasengan.js takes advantage of its performance to give you a great experience.",
    image: "",
    logo: "https://vitejs.dev/logo.svg",
    link: "https://vitejs.dev/",
    target: "_blanc"
  },
  {
    id: 3,
    title: "React Router",
    description: "Best Library for routing in React. It gives the possibility to Rasengan.js to handle the routing system nicely.",
    image: "",
    logo: reactRouterLogo,
    link: "https://reactrouter.com/",
    target: "_blanc"
  },
];