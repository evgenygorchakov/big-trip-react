import { Logo } from "../Logo";
import { Button } from "../Button";
import s from "./AppHeader.module.css";
import { AppContainer } from "../AppContainer";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { eventFormSlice } from "../../store/reducers/EventFormSlice";

export const AppHeader = () => {
  const { showed } = useAppSelector((state) => state.eventFormReducer);
  const { showAddEventForm } = eventFormSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <header className={s.header}>
      <AppContainer className={s.container}>
        <Logo />

        <div className="trip-main">
          <section className="trip-main__trip-info  trip-info">
            <p className="trip-info__cost">
              Total: &euro;&nbsp;
              <span className="trip-info__cost-value">0</span>
            </p>
          </section>

          <div className="trip-main__trip-controls  trip-controls">
            <h2 className="visually-hidden">Switch trip view</h2>
            <nav className="trip-controls__trip-tabs  trip-tabs">
              <a className="trip-tabs__btn  trip-tabs__btn--active" href="#">
                Table
              </a>
              <a className="trip-tabs__btn" href="#">
                Stats
              </a>
            </nav>

            <h2 className="visually-hidden">Filter events</h2>
            <form className="trip-filters" action="#" method="get">
              <div className="trip-filters__filter">
                <input
                  id="filter-everything"
                  className="trip-filters__filter-input  visually-hidden"
                  type="radio"
                  name="trip-filter"
                  value="everything"
                />
                <label
                  className="trip-filters__filter-label"
                  htmlFor="filter-everything"
                >
                  Everything
                </label>
              </div>

              <div className="trip-filters__filter">
                <input
                  id="filter-future"
                  className="trip-filters__filter-input  visually-hidden"
                  type="radio"
                  name="trip-filter"
                  value="future"
                />
                <label
                  className="trip-filters__filter-label"
                  htmlFor="filter-future"
                >
                  Future
                </label>
              </div>

              <div className="trip-filters__filter">
                <input
                  id="filter-past"
                  className="trip-filters__filter-input  visually-hidden"
                  type="radio"
                  name="trip-filter"
                  value="past"
                />
                <label
                  className="trip-filters__filter-label"
                  htmlFor="filter-past"
                >
                  Past
                </label>
              </div>

              <button className="visually-hidden" type="submit">
                Accept filter
              </button>
            </form>
          </div>

          <Button
            className="trip-main__event-add-btn"
            color="yellow"
            size="big"
            disabled={showed}
            onClick={() => dispatch(showAddEventForm(true))}
          >
            New event
          </Button>
        </div>
      </AppContainer>
    </header>
  );
};
