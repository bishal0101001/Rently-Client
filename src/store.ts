import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import placeReducer from "./slices/placeSlice";
import { userApi, listingsApi } from "./slices/apiSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    place: placeReducer,
    [userApi.reducerPath]: userApi.reducer,
    [listingsApi.reducerPath]: listingsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      listingsApi.middleware,
      userApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
