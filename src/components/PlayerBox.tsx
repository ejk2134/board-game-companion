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
  const gameState = useAppSelector((state) => state.game)
  const player = gameState[color]

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
            onClick={() => dispatch(updateResources({ [color]: { wool: 1 } }))}
          >
            + wool
          </button>
          <button
            onClick={() => dispatch(updateResources({ [color]: { ore: 1 } }))}
          >
            + ore
          </button>
          <button
            onClick={() =>
              dispatch(updateResources({ [color]: { lumber: 1 } }))
            }
          >
            + lumber
          </button>
          <button
            onClick={() => dispatch(updateResources({ [color]: { grain: 1 } }))}
          >
            + grain
          </button>
          <button
            onClick={() => dispatch(updateResources({ [color]: { brick: 1 } }))}
          >
            + brick
          </button>
          {/* <button
            onClick={() =>
              dispatch(updateResources([{ color, resources: { lumber: 1 } }]))
            }
          >
            + unknown
          </button> */}
        </div>
        <div>
          <button
            onClick={() => dispatch(updateResources({ [color]: { wool: -1 } }))}
          >
            - wool
          </button>
          <button
            onClick={() => dispatch(updateResources({ [color]: { ore: -1 } }))}
          >
            - ore
          </button>
          <button
            onClick={() =>
              dispatch(updateResources({ [color]: { lumber: -1 } }))
            }
          >
            - lumber
          </button>
          <button
            onClick={() =>
              dispatch(updateResources({ [color]: { grain: -1 } }))
            }
          >
            - grain
          </button>
          <button
            onClick={() =>
              dispatch(updateResources({ [color]: { brick: -1 } }))
            }
          >
            - brick
          </button>
          {/* <button
            onClick={() =>
              dispatch(updateResources([{ color, resources: { lumber: 1 } }]))
            }
          >
            + unknown
          </button> */}
        </div>
        <p>w: {player.wool}</p>
        <p>o: {player.ore}</p>
        <p>l: {player.lumber}</p>
        <p>g: {player.grain}</p>
        <p>c: {player.brick}</p>
        {/* <p>?: {player.unknown}</p> */}
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
