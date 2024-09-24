import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["500", "800"],
});

export const fonts = {
  figtree,
};
