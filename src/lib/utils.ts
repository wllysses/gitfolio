import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTextBetween(
  text: string,
  openTag: string,
  closeTag: string
) {
  const pos = text.indexOf(openTag) + openTag.length;
  const textBetween = text.substring(pos, text.indexOf(closeTag, pos));
  return textBetween;
}
