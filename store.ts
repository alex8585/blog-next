import { createStore, applyMiddleware } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'

import tagsSlice from './features/tags/tagsSlice'
import portfoliosSlice from './features/portfolios/portfoliosSlice'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  Action,
  AnyAction,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit'

const bindMiddleware = (middleware: Array<any>) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const rootReducer = combineReducers({
  tags: tagsSlice,
  portfolios: portfoliosSlice,
})

const reducer: any = (state: RootState, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    return nextState
  } else {
    return rootReducer(state, action)
  }
}

export const useStore = () => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper(useStore)

export const makeStore = () =>
  configureStore({
    reducer,
  })
type Store = ReturnType<typeof makeStore>

export type AppDispatch = Store['dispatch']
export type RootState = ReturnType<Store['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
