import { StaticImageData } from "next/image";
import artPortfolioImage from "./images/portfolio-art/1.png";
import magpiesImage from "./images/magpies/1.png";

export type ShowcaseDataType = {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  link: string;
  twitterProfile?: string;
};

export const ShowcaseData: Array<ShowcaseDataType> = [
  {
    id: 1,
    title: "Art Portfolio",
    description: "Artistic portfolio website of @dilane3, the creator of Rasengan.js.",
    image: artPortfolioImage,
    link: "https://art.dilane3.com",
    twitterProfile: "https://x.com/dilanekombou"
  },
  {
    id: 2,
    title: "MagPies",
    description: "An image sharing app where you can explore a large list of photos and share your own.",
    image: magpiesImage,
    link: "https://magpies.dilane3.com"
  }
];
