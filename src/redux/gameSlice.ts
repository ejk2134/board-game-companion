import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type ColorOption = 'blue' | 'red' | 'orange' | 'white'
type ResourceOption = 'brick' | 'grain' | 'ore' | 'lumber' | 'wool'

const initialState = {
  blue: {
    brick: 0,
    grain: 0,
    lumber: 0,
    ore: 0,
    wool: 0,
  },
  red: {
    brick: 0,
    grain: 0,
    lumber: 0,
    ore: 0,
    wool: 0,
  },
  orange: {
    brick: 0,
    grain: 0,
    lumber: 0,
    ore: 0,
    wool: 0,
  },
  white: {
    brick: 0,
    grain: 0,
    lumber: 0,
    ore: 0,
    wool: 0,
  },
}

export type ResourceTally = {
  wool?: number
  ore?: number
  lumber?: number
  grain?: number
  brick?: number
  unknown?: number
}

type UpdateResourcesAction = {
  blue?: ResourceTally
  red?: ResourceTally
  orange?: ResourceTally
  white?: ResourceTally
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    updateResources: (state, action: PayloadAction<UpdateResourcesAction>) => {
      for (const color in action.payload) {
        for (const resource in action.payload[color as ColorOption]) {
          state[color as ColorOption][resource as ResourceOption] +=
            action.payload[color as ColorOption][resource as ResourceOption]
        }
      }
    },
  },
})

export const { updateResources } = gameSlice.actions
export default gameSlice.reducer
