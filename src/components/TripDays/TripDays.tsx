import { FC } from "react";
import { TripDay } from "../TripDay";
import s from "./TripDays.module.css";

export const TripDays: FC = () => {
  return (
    <ul className={s["trip-days"]}>
      <TripDay />
    </ul>
  );
};
