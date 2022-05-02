import { FC } from "react";
import { AppContainer } from "../AppContainer";
import { TripPoints } from "../TripPoints";
import s from "./AppMain.module.css";

export const AppMain: FC = () => {
  return (
    <main className={s.main}>
      <AppContainer>
        <TripPoints />
      </AppContainer>
    </main>
  );
};
