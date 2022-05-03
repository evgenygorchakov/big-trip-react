import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { pointsApi } from "../api/PointsApi";
import pointReducer from "./reducers/PointSlice";

const rootReducer = combineReducers({
  pointReducer: pointReducer,
  [pointsApi.reducerPath]: pointsApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pointsApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
