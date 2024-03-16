export type CardDataType = {
  id: number;
  title: string;
  description: string;
  image?: string;
  logo?: string;
  link: string;
  target?: string;
  isblog?: boolean;
};

export const FeaturesData: Array<CardDataType> = [
  {
    id: 1,
    title: "Routing",
    description:
      "Based on React-Router, Rasengan.js supports multi page routing by default which allow you to create complex apps.",
    image: "",
    link: "#"
  },
  {
    id: 2,
    title: "Image optimization",
    description: "To improve UX, Rasengan.js proposes an Image component that optimizes the rendering of your images with a lazy loading.",
    image: "",
    link: "#"
  },
  {
    id: 3,
    title: "Data Fetching",
    description: "Rasengan.js supports both client and server side Data Fetching that allows you to fetch data from a server and use it on client.",
    image: "",
    link: "#"
  },
  {
    id: 4,
    title: "CSS Support",
    description: "In terms of styling, Rasengan.js supports CSS Modules, Tailwind and many other CSS Libraries.",
    image: "",
    link: "#"
  },
  {
    id: 5,
    title: "Client and Server Rendering",
    description: "Rasengan.js supports SSR by default which enhances the SEO of your final application.",
    image: "",
    link: "#"
  },
  {
    id: 6,
    title: "Rasengan.js 1.0.0",
    description: "First release of Rasengan.js. Built for creating high-quality web apps.",
    image: "",
    link: "#",
    isblog: true
  },
];
