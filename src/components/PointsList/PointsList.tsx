import { FC } from "react";
import { Point } from "../Point/Point";
import s from "./PointsList.module.css";

export const PointsList: FC = () => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <Point />
      </li>
    </ul>
  );
};
