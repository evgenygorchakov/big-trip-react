import s from "./TripPoints.module.css";
import { AddPointForm } from "../AddPointForm";
import { useAppSelector } from "../../hooks/redux";
import { FC, useEffect } from "react";
import { PointService } from "../../api";

export const TripPoints: FC = () => {
  const { showed } = useAppSelector((state) => state.eventFormReducer);

  useEffect(() => {
    // PointService.fetchPoints().then(() => {});
  });

  return (
    <section className={s.root}>
      <h2 className="visually-hidden">Trip events</h2>

      {showed && <AddPointForm />}

      {/* <p className="trip-events__msg">
        Click New Event to create your first point
      </p> */}
    </section>
  );
};
