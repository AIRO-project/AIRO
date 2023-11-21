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
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  }
) as any;

export const deleteDevice = createAsyncThunk(
  "devices/deleteDevice",
  async (id: string) => {
    try {
      const device = doc(db, "devices", id);
      await deleteDoc(device);
    } catch (error) {
      console.log(error);
    }
  }
) as any;

type DevicesT = {
  devices: DeviceT[];
  loading: boolean;
  error: string;
};

const initialState: DevicesT = {
  devices: [],
  loading: false,
  error: "",
};

export const devicesSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    setDevices: (state, action) => {
      state.devices = action.payload;
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
export const { setDevices } = devicesSlice.actions;
export default devicesSlice.reducer;
