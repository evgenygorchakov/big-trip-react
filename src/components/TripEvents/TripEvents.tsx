import s from "./TripEvents.module.css";
import { AddPointForm } from "../AddPointForm";
import { useAppSelector } from "../../hooks/redux";
import { FC } from "react";
import { TripDays } from "../TripDays";
import { useGetPointsQuery } from "../../api/PointsApi";

export const TripEvents: FC = () => {
  const { addEventFormShowed: showed } = useAppSelector(
    (state) => state.pointReducer
  );
  const { data, isLoading } = useGetPointsQuery("points");

  return (
    <section className={s.root}>
      <h2 className="visually-hidden">Trip events</h2>

      {showed && <AddPointForm />}

      {data && data.length > 0 && <TripDays />}

      {isLoading && <p className="trip-events__msg">Loading...</p>}

      {data && data.length === 0 && (
        <p className="trip-events__msg">
          Click New Event to create your first point"
        </p>
      )}
    </section>
  );
};
