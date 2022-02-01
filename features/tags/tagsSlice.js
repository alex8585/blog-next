import { createSlice, createEntityAdapter } from "@reduxjs/toolkit"
import { getTagsThunk } from "./tagsThunks"

const tagsAdapter = createEntityAdapter({
  selectId: (tag) => tag.id,
})

const initialState = {
  data: tagsAdapter.getInitialState(),
  loading: false,
}

export const tagsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getTagsThunk.pending](state) {
      state.loading = true
    },
    [getTagsThunk.rejected](state) {
      state.loading = false
    },
    [getTagsThunk.fulfilled](state, { payload }) {
      state.loading = false
      tagsAdapter.setAll(state.data, payload.data.items)
    },
  },
})

export const tagsSelectors = tagsAdapter.getSelectors(
  (state) => state.tags.data
)

export const getTags = getTagsThunk

export default tagsSlice.reducer
