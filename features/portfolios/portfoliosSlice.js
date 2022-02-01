import { createSlice, createEntityAdapter } from "@reduxjs/toolkit"
import { getPortfoliosThunk } from "./portfoliosThunks"

const portfoliosAdapter = createEntityAdapter({
  selectId: (product) => product.id,
})

const initialState = {
  data: portfoliosAdapter.getInitialState(),
  loading: false,
}

export const counterSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getPortfoliosThunk.pending](state) {
      state.loading = true
    },
    [getPortfoliosThunk.rejected](state) {
      state.loading = false
    },
    [getPortfoliosThunk.fulfilled](state, { payload }) {
      state.loading = false
      portfoliosAdapter.setAll(state.data, payload.data)
      // state.lastPage = payload.last_page
      state.page = payload.page
      state.total = payload.total
      state.perPage = payload.perPage
    },
  },
})

export const portfoliosSelectors = portfoliosAdapter.getSelectors(
  (state) => state.portfolios.data
)

export const getPortfolios = getPortfoliosThunk

export default counterSlice.reducer
