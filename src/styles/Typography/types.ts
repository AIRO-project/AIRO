import { ReactNode } from "react";

type TagVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

export type TagStyleVariants =
  | "heading1"
  | "heading2"
  | "subtitle1"
  | "subtitle2"
  | "subtitle3"
  | "subtitle4"
  | "body"
  | "label1"
  | "label2"
  | "label3";

export type Props = {
  tag?: TagVariants;
  tagStyle?: TagStyleVariants;
  children: ReactNode;
};
