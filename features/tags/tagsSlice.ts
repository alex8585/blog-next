import { createSlice, createEntityAdapter, EntityState } from "@reduxjs/toolkit"
import { getTagsThunk } from "./tagsThunks"



interface Tag {
    id: number
    name: string
}
interface TagsState {
    data:EntityState<Tag>
    loading: boolean
}
interface GlobalState {
    tags: TagsState
}

const tagsAdapter = createEntityAdapter({
    selectId: (tag: Tag) => tag.id,
})



const initialState = {
    data: tagsAdapter.getInitialState(),
    loading: false,
} as TagsState

export const tagsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder)=> {

        builder.addCase(getTagsThunk.pending ,(state, {payload}) => {
            state.loading = true
        })

        builder.addCase(getTagsThunk.rejected ,(state, {payload}) => {
            state.loading = false
        })

        builder.addCase(getTagsThunk.fulfilled ,(state, {payload}) => {
            state.loading = false
            tagsAdapter.setAll(state.data, payload.data.items)
        })


    },
})


export const tagsSelectors = tagsAdapter.getSelectors(
    (state: GlobalState) => state.tags.data
)

export const getTags = getTagsThunk

export default tagsSlice.reducer
