export type Author = {
  name: string;
  avatar: string;
};

export type BlogDataType = {
  id: number;
  title: string;
  description: string;
  authors: Array<Author>;
  createdAt: string;
  link: string;
};

export const BlogData: Array<BlogDataType> = [
  {
    id: 1,
    title: "Rasengan 1.0.0-beta: First beta version",
    description: `
      Description here...
    `,
    authors: [],
    createdAt: "20 April, 2024",
    link: "/blog/rasengan-1-beta",
  },
];
