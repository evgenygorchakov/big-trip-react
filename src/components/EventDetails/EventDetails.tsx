import s from "./EventDetails.module.css";
import cn from "classnames";
import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";
import photo5 from "./photos/5.jpg";

export const EventDetails = () => {
  return (
    <section className={s["event__details"]}>
      <section className={cn(s["event__section"], s["event__section--offers"])}>
        <h3
          className={cn(
            s["event__section-title"],
            s["event__section-title--offers"]
          )}
        >
          Offers
        </h3>

        <div className={s["event__available-offers"]}>
          <div className={s["event__offer-selector"]}>
            <input
              className={cn(s["event__offer-checkbox"], "visually-hidden")}
              id="event-offer-luggage-1"
              type="checkbox"
              name="event-offer-luggage"
            />
            <label
              className={s["event__offer-label"]}
              htmlFor="event-offer-luggage-1"
            >
              <span className={s["event__offer-title"]}>Add luggage</span>
              &plus; &euro;&nbsp;
              <span className={s["event__offer-price"]}>30</span>
            </label>
          </div>

          <div className={s["event__offer-selector"]}>
            <input
              className={cn(s["event__offer-checkbox"], "visually-hidden")}
              id="event-offer-comfort-1"
              type="checkbox"
              name="event-offer-comfort"
            />
            <label
              className={s["event__offer-label"]}
              htmlFor="event-offer-comfort-1"
            >
              <span className={s["event__offer-title"]}>
                Switch to comfort className
              </span>
              &plus; &euro;&nbsp;
              <span className={s["event__offer-price"]}>100</span>
            </label>
          </div>

          <div className={s["event__offer-selector"]}>
            <input
              className={cn(s["event__offer-checkbox"], "visually-hidden")}
              id="event-offer-meal-1"
              type="checkbox"
              name="event-offer-meal"
            />
            <label
              className={s["event__offer-label"]}
              htmlFor="event-offer-meal-1"
            >
              <span className={s["event__offer-title"]}>Add meal</span>
              &plus; &euro;&nbsp;
              <span className={s["event__offer-price"]}>15</span>
            </label>
          </div>

          <div className={s["event__offer-selector"]}>
            <input
              className={cn(s["event__offer-checkbox"], "visually-hidden")}
              id="event-offer-seats-1"
              type="checkbox"
              name="event-offer-seats"
            />
            <label
              className={s["event__offer-label"]}
              htmlFor="event-offer-seats-1"
            >
              <span className={s["event__offer-title"]}>Choose seats</span>
              &plus; &euro;&nbsp;
              <span className={s["event__offer-price"]}>5</span>
            </label>
          </div>

          <div className={s["event__offer-selector"]}>
            <input
              className={cn(s["event__offer-checkbox"], "visually-hidden")}
              id="event-offer-train-1"
              type="checkbox"
              name="event-offer-train"
            />
            <label
              className={s["event__offer-label"]}
              htmlFor="event-offer-train-1"
            >
              <span className={s["event__offer-title"]}>Travel by train</span>
              &plus; &euro;&nbsp;
              <span className={s["event__offer-price"]}>40</span>
            </label>
          </div>
        </div>
      </section>

      <section
        className={cn(s["event__section"], s["event__section--destination"])}
      >
        <h3
          className={cn(
            s["event__section-title"],
            s["event__section-title--destination"]
          )}
        >
          Destination
        </h3>
        <p className={s["event__destination-description"]}>
          Geneva is a city in Switzerland that lies at the southern tip of
          expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura
          mountains, the city has views of dramatic Mont Blanc.
        </p>

        <div className={s["event__photos-container"]}>
          <div className={s["event__photos-tape"]}>
            <img className={s["event__photo"]} src={photo1} alt="Event photo" />
            <img className={s["event__photo"]} src={photo2} alt="Event photo" />
            <img className={s["event__photo"]} src={photo3} alt="Event photo" />
            <img className={s["event__photo"]} src={photo4} alt="Event photo" />
            <img className={s["event__photo"]} src={photo5} alt="Event photo" />
          </div>
        </div>
      </section>
    </section>
  );
};
