import { AppContainer } from "../AppContainer";
import { TripEvents } from "../TripEvents";
import s from "./AppMain.module.css";

export const AppMain = () => {
  return (
    <main className={s.main}>
      <AppContainer>
        <TripEvents />
      </AppContainer>
    </main>
  );
};
