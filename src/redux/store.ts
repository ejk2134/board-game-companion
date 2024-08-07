import { configureStore } from '@reduxjs/toolkit'
import gameConfigurationReducer from './gameConfigurationSlice'

export const store = configureStore({
  reducer: {
    gameConfiguration: gameConfigurationReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
