const clsx = require("clsx"); // clsx from "clsx";
const { twMerge } = require("tailwind-merge");

function cn(...inputs) {
  return twMerge(clsx(inputs));
}