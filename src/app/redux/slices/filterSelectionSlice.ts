import { createSlice } from "@reduxjs/toolkit";

type FilterOptions = {
  company: string;
  role: string;
  contract: string;
  languages: string;
  location: string;
  searchTerm: string;
};

const initialState: FilterOptions = {
  company: "",
  role: "",
  contract: "",
  languages: "",
  location: "",
  searchTerm: "",
};

const filterSelectionSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    updateCompany(state, action) {
      state.company = action.payload;
    },
    updateRole(state, action) {
      state.role = action.payload;
    },
    updateContract(state, action) {
      state.contract = action.payload;
    },
    updateLanguages(state, action) {
      state.languages = action.payload;
    },
    updateLocation(state, action) {
      state.location = action.payload;
    },
    updateSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const {
  updateCompany,
  updateRole,
  updateContract,
  updateLanguages,
  updateLocation,
  updateSearchTerm,
} = filterSelectionSlice.actions;

export default filterSelectionSlice.reducer; //filterSelectionReducers
