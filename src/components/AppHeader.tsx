import React from "react";
import { AppLogo } from "./AppLogo";
import { Button } from "./Button";

const AppHeader = () => {
  return (
    <header className="page-header">
      <div className="page-body__container  page-header__container">
        <AppLogo />

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
          >
            New event
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
