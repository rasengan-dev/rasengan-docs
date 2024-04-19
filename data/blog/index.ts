import { dilaneKombou } from 'data/blog/images/avatars'
import { StaticImageData } from 'next/image';

export type Author = {
  id: number;
  name: string;
  username: string;
  avatar: string | StaticImageData;
  link: string;
};

export type BlogDataType = {
  id: number;
  title: string;
  description: string;
  authors: Array<Author>;
  postedAt: string;
  link: string;
};

export const BlogData: Array<BlogDataType> = [
  {
    id: 1,
    title: "Rasengan 1.0.0 Beta",
    description: `
      We are launching the first beta version of Rasengan.js, a modern React Framework that you can use to create high-quality web applications.
    `,
    authors: [{
      id: 1,
      name: "Dilane Kombou",
      username: "@dilanekombou",
      link: "https://twitter.com/dilanekombou",
      avatar: dilaneKombou
    }],
    postedAt: "April 25, 2024",
    link: "/blog/rasengan-1-beta",
  },
];
