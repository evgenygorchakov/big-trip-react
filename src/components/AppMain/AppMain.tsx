import { AppContainer } from "../AppContainer";
import s from "./AppMain.module.css";

export const AppMain = () => {
  return (
    <main className={s.main}>
      <AppContainer>
        <section className="trip-events">
          <h2 className="visually-hidden">Trip events</h2>

          <p className="trip-events__msg">
            Click New Event to create your first point
          </p>
        </section>
      </AppContainer>
    </main>
  );
};
