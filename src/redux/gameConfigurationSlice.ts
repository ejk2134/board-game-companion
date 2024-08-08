import { createSlice } from '@reduxjs/toolkit'

type GameConfigurationPlayer = {
  name: string
  color: 'blue' | 'red' | 'orange' | 'white' | null
}

export interface GameConfigurationState {
  players: GameConfigurationPlayer[]
}

const initialState: GameConfigurationState = {
  players: [
    // { name: '', color: null },
    // { name: '', color: null },
    // { name: '', color: null },
    { name: 'tony', color: 'blue' },
    { name: 'mark', color: 'red' },
    { name: 'bill', color: 'orange' },
  ],
}

export const gameConfigurationSlice = createSlice({
  name: 'gameConfiguration',
  initialState,
  reducers: {
    setup: (state, action) => {
      state.players = action.payload
    },
  },
})

export const { setup } = gameConfigurationSlice.actions
export default gameConfigurationSlice.reducer
