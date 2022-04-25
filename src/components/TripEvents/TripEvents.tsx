import s from "./TripEvents.module.css";
import { AddEventForm } from "../AddEventForm";

export const TripEvents = () => {
  return (
    <section className={s.root}>
      <h2 className="visually-hidden">Trip events</h2>

      <AddEventForm />

      {/* <p className="trip-events__msg">
        Click New Event to create your first point
      </p> */}
    </section>
  );
};
