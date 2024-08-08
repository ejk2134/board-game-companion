import { configureStore } from '@reduxjs/toolkit'
import gameConfigurationReducer from './gameConfigurationSlice'
import gameReducer from './gameSlice'
import { useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    gameConfiguration: gameConfigurationReducer,
    game: gameReducer,
  },
})

type RootState = ReturnType<typeof store.getState>

export const useAppSelector = useSelector.withTypes<RootState>()

export { RootState }
export type AppDispatch = typeof store.dispatch
