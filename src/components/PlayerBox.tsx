import { useAppSelector } from '../redux/store'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { updateResources } from '../redux/gameSlice'

type PlayerBoxType = {
  name: string
  color: 'blue' | 'red' | 'orange' | 'white'
}

const PlayerBox: React.FC<PlayerBoxType> = ({ name, color }) => {
  const dispatch = useDispatch()
  const state = useAppSelector((state) => state.game)
  const player = state.players.find(
    ({ color: statePlayerColor }) => statePlayerColor === color
  )

  return (
    <StyledContainer>
      <div>
        <BoxHeader>{name}</BoxHeader>
        <p>{color}</p>
      </div>
      <div>
        <BoxHeader>Resources</BoxHeader>
        <div>
          <button
            onClick={() =>
              dispatch(updateResources({ color, resources: { wool: 1 } }))
            }
          >
            + wool
          </button>
          <button
            onClick={() =>
              dispatch(updateResources({ color, resources: { ore: 1 } }))
            }
          >
            + ore
          </button>
          <button
            onClick={() =>
              dispatch(updateResources({ color, resources: { lumber: 1 } }))
            }
          >
            + lumber
          </button>
          <button
            onClick={() =>
              dispatch(updateResources({ color, resources: { grain: 1 } }))
            }
          >
            + grain
          </button>
          <button
            onClick={() =>
              dispatch(updateResources({ color, resources: { clay: 1 } }))
            }
          >
            + clay
          </button>
          <button
            onClick={() =>
              dispatch(updateResources({ color, resources: { unknown: 1 } }))
            }
          >
            + unknown
          </button>
        </div>
        <div>
          <button
            onClick={() =>
              dispatch(updateResources({ color, resources: { wool: -1 } }))
            }
          >
            + wool
          </button>
          <button
            onClick={() =>
              dispatch(updateResources({ color, resources: { ore: -1 } }))
            }
          >
            + ore
          </button>
          <button
            onClick={() =>
              dispatch(updateResources({ color, resources: { lumber: -1 } }))
            }
          >
            + lumber
          </button>
          <button
            onClick={() =>
              dispatch(updateResources({ color, resources: { grain: -1 } }))
            }
          >
            + grain
          </button>
          <button
            onClick={() =>
              dispatch(updateResources({ color, resources: { clay: -1 } }))
            }
          >
            + clay
          </button>
          <button
            onClick={() =>
              dispatch(updateResources({ color, resources: { unknown: -1 } }))
            }
          >
            + unknown
          </button>
        </div>
        <p>w: {player.resources.wool}</p>
        <p>o: {player.resources.ore}</p>
        <p>l: {player.resources.lumber}</p>
        <p>g: {player.resources.grain}</p>
        <p>c: {player.resources.clay}</p>
        <p>?: {player.resources.unknown}</p>
      </div>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;

  border: 1px solid black;
  padding: 10px;
  margin: 10px;
`

const BoxHeader = styled.h3`
  font-size: 20px;
`

export default PlayerBox
