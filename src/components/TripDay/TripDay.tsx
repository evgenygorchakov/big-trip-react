import { FC } from "react";

export const TripDay: FC = () => {
  return (
    <li className="day">
      <div className="day__info">
        <span className="day__counter">1</span>
        <time className="day__date">MAR 18</time>
      </div>

      <ul className="trip-events__list">
        <li className="trip-events__item">
          <div className="event">
            <div className="event__type">
              <img
                className="event__type-icon"
                width="42"
                height="42"
                src="img/icons/taxi.png"
                alt="Event type icon"
              />
            </div>
            <h3 className="event__title">Taxi to airport</h3>

            <div className="event__schedule">
              <p className="event__time">
                <time className="event__start-time">10:30</time>
                &mdash;
                <time className="event__end-time">11:00</time>
              </p>
              <p className="event__duration">1H 30M</p>
            </div>

            <p className="event__price">
              &euro;&nbsp;<span className="event__price-value">20</span>
            </p>

            <h4 className="visually-hidden">Offers:</h4>
            <ul className="event__selected-offers">
              <li className="event__offer">
                <span className="event__offer-title">Order Uber</span>
                &plus; &euro;&nbsp;
                <span className="event__offer-price">20</span>
              </li>
            </ul>

            <button className="event__rollup-btn" type="button">
              <span className="visually-hidden">Open event</span>
            </button>
          </div>
        </li>
      </ul>
    </li>
  );
};
