import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import devicesReducer from "../slices/devicesSlice";
import notificationReducer from "../slices/notificationSlice";
import sidePanelReducer from "../slices/sidePanelSlice";
import userReducer from "../slices/userSlice";

const rootReducer = combineReducers({
  sidePanel: sidePanelReducer,
  user: userReducer,
  devices: devicesReducer,
  notification: notificationReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["devices", "notification", "sidePanel"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
