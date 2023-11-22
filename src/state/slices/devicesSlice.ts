/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";

import { db } from "/src/config/firebase";
import { DeviceT } from "/src/types/DeviceT";

import { RootState } from "../store";

export const addDevice = createAsyncThunk(
  "devices/addDevice",
  async (device: DeviceT) => {
    try {
      await addDoc(collection(db, "devices"), {
        ...device,
      });
    } catch {
      throw new Error("Could not Save Device in Database");
    }
  }
) as any;

export const deleteDevice = createAsyncThunk(
  "devices/deleteDevice",
  async (id: string) => {
    try {
      const device = doc(db, "devices", id);
      await deleteDoc(device);
    } catch {
      throw new Error("Could not Delete Device");
    }
  }
) as any;

type DevicesT = {
  devices: DeviceT[];
  loading: boolean;
  error: string;
  selectedDevice: DeviceT | null;
};

const initialState: DevicesT = {
  devices: [],
  loading: false,
  error: "",
  selectedDevice: null,
};

export const devicesSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    setDevices: (state, action) => {
      state.devices = action.payload;
    },
    setSelectedDevice: (state, action) => {
      state.selectedDevice = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addDevice.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addDevice.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(addDevice.rejected, (state, action) => {
      state.error = action.error.message!;
      state.loading = false;
    });
    builder.addCase(deleteDevice.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteDevice.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(deleteDevice.rejected, (state, action) => {
      state.error = action.error.message!;
      state.loading = false;
    });
  },
});
export const selectDevices = (state: RootState) => state.devices;
export const { setDevices, setSelectedDevice } = devicesSlice.actions;
export default devicesSlice.reducer;
