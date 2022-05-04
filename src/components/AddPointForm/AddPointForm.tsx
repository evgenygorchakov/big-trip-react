import s from "./AddPointForm.module.css";
import cn from "classnames";
import { Button } from "../Button";
import { PointDetails } from "../PointDetails";
import { useAppDispatch } from "../../hooks/redux";
import { pointSlice } from "../../store/reducers/PointSlice";
import eventTypeIcon from "./img/flight.png";

export const AddPointForm = () => {
  const { showAddEventForm } = pointSlice.actions;
  const dispatch = useAppDispatch();

  const cancelHandler = () => {
    dispatch(showAddEventForm(false));
  };

  return (
    <form
      className={cn("trip-events__item", s.event, s["event--edit"])}
      action="#"
      method="post"
    >
      <header className={s.event__header}>
        <div className={s["event__type-wrapper"]}>
          <label
            className={cn(s.event__type, s["event__type-btn"])}
            htmlFor={s["event-type-toggle-1"]}
          >
            <span className="visually-hidden">Choose event type</span>
            <img
              className={s["event__type-icon"]}
              width="17"
              height="17"
              src={eventTypeIcon}
              alt="Event type icon"
            />
          </label>
          <input
            className={cn(s["event__type-toggle"], "visually-hidden")}
            id="event-type-toggle-1"
            type="checkbox"
          />

          <div className={s["event__type-list"]}>
            <fieldset className={s["event__type-group"]}>
              <legend className="visually-hidden">Transfer</legend>

              <div className={s["event__type-item"]}>
                <input
                  id="event-type-taxi-1"
                  className={cn(s["event__type-input"], "visually-hidden")}
                  type="radio"
                  name="event-i"
                  value="taxi"
                />
                <label
                  className={cn(
                    s["event__type-label"],
                    s["event__type-label--taxi"]
                  )}
                  htmlFor="event-type-taxi-1"
                >
                  Taxi
                </label>
              </div>

              <div className={s["event__type-item"]}>
                <input
                  id="event-type-bus-1"
                  className={cn(s["event__type-input"], "visually-hidden")}
                  type="radio"
                  name="event-type"
                  value="bus"
                />
                <label
                  className={cn(
                    s["event__type-label"],
                    s["event__type-label--bus"]
                  )}
                  htmlFor="event-type-bus-1"
                >
                  Bus
                </label>
              </div>

              <div className={s["event__type-item"]}>
                <input
                  id="event-type-train-1"
                  className={cn(s["event__type-input"], "visually-hidden")}
                  type="radio"
                  name="event-type"
                  value="train"
                />
                <label
                  className={cn(
                    s["event__type-label"],
                    s["event__type-label--train"]
                  )}
                  htmlFor="event-type-train-1"
                >
                  Train
                </label>
              </div>

              <div className={s["event__type-item"]}>
                <input
                  id="event-type-ship-1"
                  className={cn(s["event__type-input"], "visually-hidden")}
                  type="radio"
                  name="event-type"
                  value="ship"
                />
                <label
                  className={cn(
                    s["event__type-label"],
                    s["event__type-label--ship"]
                  )}
                  htmlFor="event-type-ship-1"
                >
                  Ship
                </label>
              </div>

              <div className={s["event__type-item"]}>
                <input
                  id="event-type-transport-1"
                  className={cn(s["event__type-input"], "visually-hidden")}
                  type="radio"
                  name="event-type"
                  value="transport"
                />
                <label
                  className={cn(
                    s["event__type-label"],
                    s["event__type-label--transport"]
                  )}
                  htmlFor="event-type-transport-1"
                >
                  Transport
                </label>
              </div>

              <div className={s["event__type-item"]}>
                <input
                  id="event-type-drive-1"
                  className={cn(s["event__type-input"], "visually-hidden")}
                  type="radio"
                  name="event-type"
                  value="drive"
                />
                <label
                  className={cn(
                    s["event__type-label"],
                    s["event__type-label--drive"]
                  )}
                  htmlFor="event-type-drive-1"
                >
                  Drive
                </label>
              </div>

              <div className={s["event__type-item"]}>
                <input
                  id="event-type-flight-1"
                  className={cn(s["event__type-input"], "visually-hidden")}
                  type="radio"
                  name="event-type"
                  value="flight"
                />
                <label
                  className={cn(
                    s["event__type-label"],
                    s["event__type-label--flight"]
                  )}
                  htmlFor="event-type-flight-1"
                >
                  Flight
                </label>
              </div>
            </fieldset>

            <fieldset className={s["event__type-group"]}>
              <legend className="visually-hidden">Activity</legend>

              <div className={s["event__type-item"]}>
                <input
                  id="event-type-check-in-1"
                  className={cn(s["event__type-input"], "visually-hidden")}
                  type="radio"
                  name="event-type"
                  value="check-in"
                />
                <label
                  className={cn(
                    s["event__type-label"],
                    s["event__type-label--check-in"]
                  )}
                  htmlFor="event-type-check-in-1"
                >
                  Check-in
                </label>
              </div>

              <div className={s["event__type-item"]}>
                <input
                  id="event-type-sightseeing-1"
                  className="event__type-input visually-hidden"
                  type="radio"
                  name="event-type"
                  value="sightseeing"
                />
                <label
                  className={cn(
                    s["event__type-label"],
                    s["event__type-label--sightseeing"]
                  )}
                  htmlFor="event-type-sightseeing-1"
                >
                  Sightseeing
                </label>
              </div>

              <div className={s["event__type-item"]}>
                <input
                  id="event-type-restaurant-1"
                  className={cn(s["event__type-input"], "visually-hidden")}
                  type="radio"
                  name="event-type"
                  value="restaurant"
                />
                <label
                  className="event__type-label  event__type-label--restaurant"
                  htmlFor="event-type-restaurant-1"
                >
                  Restaurant
                </label>
              </div>
            </fieldset>
          </div>
        </div>

        <div
          className={cn(
            s["event__field-group"],
            s["event__field-group--destination"]
          )}
        >
          <label
            className={cn(s["event__label"], s["event__type-output"])}
            htmlFor="event-destination-1"
          >
            Sightseeing at
          </label>
          <input
            className={cn(s["event__input"], s["event__input--destination"])}
            id="event-destination-1"
            type="text"
            name="event-destination"
            list="destination-list-1"
          />
          <datalist id="destination-list-1">
            <option value="Amsterdam"></option>
            <option value="Geneva"></option>
            <option value="Chamonix"></option>
            <option value="Saint Petersburg"></option>
          </datalist>
        </div>

        <div
          className={cn(s["event__field-group"], s["event__field-group--time"])}
        >
          <label className="visually-hidden" htmlFor="event-start-time-1">
            From
          </label>
          <input
            className={cn(s["event__input"], s["event__input--time"])}
            id="event-start-time-1"
            type="text"
            name="event-start-time"
          />
          &mdash;
          <label className="visually-hidden" htmlFor="event-end-time-1">
            To
          </label>
          <input
            className={cn(s["event__input"], s["event__input--time"])}
            id="event-end-time-1"
            type="text"
            name="event-end-time"
          />
        </div>

        <div
          className={cn(
            s["event__field-group"],
            s["event__field-group--price"]
          )}
        >
          <label className={s["event__label"]} htmlFor="event-price-1">
            <span className="visually-hidden">Price</span>
            &euro;
          </label>
          <input
            className={cn(s["event__input"], s["event__input--price"])}
            id="event-price-1"
            type="text"
            name="event-price"
          />
        </div>

        <Button
          color="blue"
          className={s["event__save-btn"]}
          type="submit"
          onClick={() => {}}
        >
          Save
        </Button>
        <button
          className={s["event__reset-btn"]}
          type="reset"
          onClick={() => cancelHandler()}
        >
          Cancel
        </button>
      </header>

      <PointDetails />
    </form>
  );
};
