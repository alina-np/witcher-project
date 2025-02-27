import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FormStateItem {
  name: string;
  email: string;
  phone: string;
  mess: string;
  selectField: string;
  fileField: string;
  checkField: boolean;
}

const initialState: FormStateItem = {
  name: "",
  email: "",
  phone: "",
  mess: "",
  selectField: "",
  fileField: "",
  checkField: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<FormStateItem>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.mess = action.payload.mess;
      state.selectField = action.payload.selectField;
      state.checkField = action.payload.checkField;
    },
  },
});

export const { setFormData } = formSlice.actions;

export default formSlice.reducer;
