import { FC } from "react";
import s from "./Point.module.css";
import eventTypeIcon from "./img/taxi.png";

export const Point: FC = () => {
  return (
    <div className={s.event}>
      <div className={s.event__type}>
        <img
          className={s["event__type-icon"]}
          width="42"
          height="42"
          src={eventTypeIcon}
          alt="Event type icon"
        />
      </div>
      <h3 className={s.event__title}>Taxi to airport</h3>

      <div className={s.event__schedule}>
        <p className={s.event__time}>
          <time>10:30</time>
          &mdash;
          <time>11:00</time>
        </p>
        <p className={s.event__duration}>1H 30M</p>
      </div>

      <p className={s.event__price}>
        &euro;&nbsp;<span>20</span>
      </p>

      <h4 className="visually-hidden">Offers:</h4>
      <ul className={s["event__selected-offers"]}>
        <li>
          <span>Order Uber</span> + &euro;&nbsp;
          <span>20</span>
        </li>
      </ul>

      <button className={s["event__rollup-btn"]} type="button">
        <span className="visually-hidden">Open event</span>
      </button>
    </div>
  );
};
