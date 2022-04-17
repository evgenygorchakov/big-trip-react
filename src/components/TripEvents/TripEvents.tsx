import s from "./TripEvents.module.css";

export const TripEvents = () => {
  return (
    <section className={s.root}>
      <h2 className="visually-hidden">Trip events</h2>

      <p className="trip-events__msg">
        Click New Event to create your first point
      </p>
    </section>
  );
};
