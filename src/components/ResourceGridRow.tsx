import { useForm } from 'react-hook-form'
import { useAppSelector } from '../redux/store'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { ResourceTally, updateResources } from '../redux/gameSlice'

type ResourceCounts = {
  brick: number
  grain: number
  lumber: number
  ore: number
  wool: number
}

type Inputs = {
  blue: ResourceCounts
  red: ResourceCounts
  orange: ResourceCounts
  white: ResourceCounts
}

const ResourceGridRow: React.FC<{
  dieResult: '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
  colors: Array<'blue' | 'red' | 'orange' | 'white'>
}> = ({ dieResult, colors }) => {
  const dispatch = useDispatch()
  const resources = useAppSelector((state) => state.resources)
  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
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
    },
  })

  const columns: Array<'brick' | 'grain' | 'lumber' | 'ore' | 'wool'> = [
    'brick',
    'grain',
    'lumber',
    'ore',
    'wool',
  ]

  const onSubmit = (data: any) => {
    dispatch(updateResources(data))
  }

  return (
    <td>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <div style={{ border: '1px solid black', padding: '5px' }}>
            <button type="submit">{dieResult}</button>
          </div>
          {columns.map((col, colIndex) => (
            <div
              key={colIndex}
              style={{ border: '1px solid black', padding: '5px' }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '5px',
                }}
              >
                {colors.map((color, colorIndex) => (
                  <input
                    {...register(`${color}.${col}`, { valueAsNumber: true })}
                    type="number"
                    min="0"
                    max="9"
                    style={{
                      backgroundColor: color,
                      color: color === 'white' ? 'black' : 'white',
                      padding: '3px',
                      border: 'none',
                      width: '40px',
                      textAlign: 'center',
                      fontSize: '12px',
                      opacity: resources[dieResult][col][color] === 0 ? 0.4 : 1,
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </Container>
      </form>
    </td>
  )
}

const Container = styled.div`
  display: flex;
`

export default ResourceGridRow
