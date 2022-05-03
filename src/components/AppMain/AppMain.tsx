import { FC } from "react";
import { AppContainer } from "../AppContainer";
import { TripEvents } from "../TripEvents";
import s from "./AppMain.module.css";

export const AppMain: FC = () => {
  return (
    <main className={s.main}>
      <AppContainer>
        <TripEvents />
      </AppContainer>
    </main>
  );
};
