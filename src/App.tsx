import React from 'react';
import './css/style.css'

const App = () => {
  return (
    <>
      <header className="page-header">
        <div className="page-body__container  page-header__container">
          <img className="page-header__logo" src="./img/logo.png" width="42" height="42" alt="Trip logo" />

          <div className="trip-main">
            <section className="trip-main__trip-info  trip-info">
              <p className="trip-info__cost">
                Total: &euro;&nbsp;<span className="trip-info__cost-value">0</span>
              </p>
            </section>

            <div className="trip-main__trip-controls  trip-controls">
              <h2 className="visually-hidden">Switch trip view</h2>
              <nav className="trip-controls__trip-tabs  trip-tabs">
                <a className="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
                <a className="trip-tabs__btn" href="#">Stats</a>
              </nav>

              <h2 className="visually-hidden">Filter events</h2>
              <form className="trip-filters" action="#" method="get">
                <div className="trip-filters__filter">
                  <input id="filter-everything" className="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" />
                  <label className="trip-filters__filter-label" htmlFor="filter-everything">Everything</label>
                </div>

                <div className="trip-filters__filter">
                  <input id="filter-future" className="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future" />
                  <label className="trip-filters__filter-label" htmlFor="filter-future">Future</label>
                </div>

                <div className="trip-filters__filter">
                  <input id="filter-past" className="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" />
                  <label className="trip-filters__filter-label" htmlFor="filter-past">Past</label>
                </div>

                <button className="visually-hidden" type="submit">Accept filter</button>
              </form>
            </div>

            <button className="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button" disabled>New event</button>
          </div>
        </div>
      </header>

      <main className="page-body__page-main  page-main">
        <div className="page-body__container">
          <section className="trip-events">
            <h2 className="visually-hidden">Trip events</h2>

            <p className="trip-events__msg">Click New Event to create your first point</p>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
