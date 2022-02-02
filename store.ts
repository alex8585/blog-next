import { createStore, applyMiddleware } from "redux"
import { HYDRATE, createWrapper } from "next-redux-wrapper"
import thunkMiddleware from "redux-thunk"

import tagsSlice from "./features/tags/tagsSlice"
import portfoliosSlice from "./features/portfolios/portfoliosSlice"

import {
    Action,
    AnyAction,
    combineReducers,
    configureStore,
    ThunkAction,
} from '@reduxjs/toolkit';

const bindMiddleware = (middleware:Array<any>) => {
    if (process.env.NODE_ENV !== "production") {
        const { composeWithDevTools } = require("redux-devtools-extension")
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

const combinedReducer = combineReducers({
    tags: tagsSlice,
    portfolios: portfoliosSlice,
})

const reducer = (state:ReturnType<typeof combinedReducer>, action: AnyAction ) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
        return nextState
    } else {
        return combinedReducer(state, action)
    }
}

export const useStore = () => {
    return createStore(reducer, bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper(useStore)

export const makeStore = () =>
    configureStore({
        reducer,
    });
type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
