import s from "./TripEvents.module.css";
import { AddEventForm } from "../AddEventForm";
import { useAppSelector } from "../../hooks/redux";

export const TripEvents = () => {
  const { showed } = useAppSelector((state) => state.eventFormReducer);

  return (
    <section className={s.root}>
      <h2 className="visually-hidden">Trip events</h2>

      {showed && <AddEventForm />}

      {/* <p className="trip-events__msg">
        Click New Event to create your first point
      </p> */}
    </section>
  );
};
