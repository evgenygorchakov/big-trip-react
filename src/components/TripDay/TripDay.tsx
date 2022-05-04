import { FC } from "react";
import { PointsList } from "../PointsList";
import s from "./TripDay.module.css";

export const TripDay: FC = () => {
  return (
    <li className={s.day}>
      <div className={s.day__info}>
        <span className={s.day__counter}>1</span>
        <time className={s.day__date}>MAR 18</time>
      </div>

      <PointsList />
    </li>
  );
};
