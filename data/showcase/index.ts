import { StaticImageData } from "next/image";
import artPortfolioImage from "./images/portfolio-art/1.png";

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
];
