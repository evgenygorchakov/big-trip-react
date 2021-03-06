import { FC } from "react";
import s from "./AppLogo.module.css";
import img from "./logo.png";

export const Logo: FC = () => {
  return (
    <img className={s.root} src={img} width="42" height="42" alt="Trip logo" />
  );
};
