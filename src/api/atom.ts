import { atom } from "recoil";
import { CartDto } from "./interface";

export const cartState = atom<CartDto>({
  key: "cartState",
  default: new Map<string, number>(),
});

export const priceState = atom<number>({
  key: "priceState",
  default: 0,
});
