import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiDoi } from "./state/apiDoi";

export const store = configureStore({
  reducer: {
    [apiDoi.reducerPath]: apiDoi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(apiDoi.middleware),
});

setupListeners(store.dispatch);
