import { createSlice, createEntityAdapter, EntityState } from '@reduxjs/toolkit'
import { getPortfoliosThunk } from './portfoliosThunks'

interface Tag {
  id: number
  name: string
}

interface Portfolio {
  id: number
  image: string
  name: string
  tags: Tag[]
  thumb: string
  order_number: number
  url: string
}

const portfoliosAdapter = createEntityAdapter({
  selectId: (portfolio: Portfolio) => portfolio.id,
})

interface PortfolioState {
  data: EntityState<Portfolio>
  loading: boolean
  page: number
  total: number
  perPage: number
}

interface GlobalState {
  portfolios: PortfolioState
}

const initialState = {
  data: portfoliosAdapter.getInitialState(),
  loading: false,
} as PortfolioState

export const counterSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPortfoliosThunk.pending, (state) => {
      state.loading = true
    })

    builder.addCase(getPortfoliosThunk.rejected, (state) => {
      state.loading = false
    })

    builder.addCase(getPortfoliosThunk.fulfilled, (state, { payload }) => {
      state.loading = false
      portfoliosAdapter.setAll(state.data, payload.data)
      // state.lastPage = payload.last_page
      state.page = payload.page
      state.total = payload.total
      state.perPage = payload.perPage
    })
  },
})

export const portfoliosSelectors = portfoliosAdapter.getSelectors(
  (state: GlobalState) => state.portfolios.data
)

export const getPortfolios = getPortfoliosThunk

export default counterSlice.reducer
