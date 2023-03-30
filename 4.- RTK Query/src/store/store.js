import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "./apis";

import { pokemonSlice } from "./slices/pokemon";

export const store = configureStore({
  reducer: {
    pokemons: pokemonSlice.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
