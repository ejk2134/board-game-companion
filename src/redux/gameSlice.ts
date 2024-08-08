import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type GameStatePlayer = {
  name: string
  color: 'blue' | 'red' | 'orange' | 'white'
  resources: {
    wool: number
    ore: number
    lumber: number
    grain: number
    clay: number
    unknown: number
  }
}

type GameState = {
  players: GameStatePlayer[]
}

const initialState: GameState = {
  players: [
    {
      name: 'tony',
      color: 'blue',
      resources: {
        wool: 0,
        ore: 0,
        lumber: 0,
        grain: 0,
        clay: 0,
        unknown: 0,
      },
      // developmentCards
    },
    {
      name: 'mark',
      color: 'red',
      resources: {
        wool: 0,
        ore: 0,
        lumber: 0,
        grain: 0,
        clay: 0,
        unknown: 0,
      },
      // developmentCards
    },
    {
      name: 'bill',
      color: 'orange',
      resources: {
        wool: 0,
        ore: 0,
        lumber: 0,
        grain: 0,
        clay: 0,
        unknown: 0,
      },
      // developmentCards
    },
  ],
}

type ResourcesUpdate = {
  wool?: number
  ore?: number
  lumber?: number
  grain?: number
  clay?: number
  unknown?: number
}

type UpdateResourcesAction = {
  color: 'blue' | 'red' | 'orange' | 'white'
  resources: ResourcesUpdate
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    updateResources: (state, action: PayloadAction<UpdateResourcesAction>) => {
      const player = state.players.find(
        ({ color }) => color === action.payload.color
      )
      if (action.payload.resources.wool)
        player.resources.wool = Math.max(
          player.resources.wool + action.payload.resources.wool,
          0
        )
      if (action.payload.resources.ore)
        player.resources.ore = Math.max(
          player.resources.ore + action.payload.resources.ore,
          0
        )
      if (action.payload.resources.lumber)
        player.resources.lumber = Math.max(
          player.resources.lumber + action.payload.resources.lumber,
          0
        )
      if (action.payload.resources.grain)
        player.resources.grain = Math.max(
          player.resources.grain + action.payload.resources.grain,
          0
        )
      if (action.payload.resources.clay)
        player.resources.clay = Math.max(
          player.resources.clay + action.payload.resources.clay,
          0
        )
      if (action.payload.resources.unknown)
        player.resources.unknown = Math.max(
          player.resources.unknown + action.payload.resources.unknown,
          0
        )
    },
  },
})

export const { updateResources } = gameSlice.actions
export default gameSlice.reducer
