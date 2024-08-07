import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form'
import FormInput from './FormInput'
import { useEffect } from 'react'
import { styled } from 'styled-components'
import { useDispatch } from 'react-redux'
import { setup } from '../redux/gameConfigurationSlice'

type PlayerInputs = {
  color: 'blue' | 'red' | 'orange' | 'white' | null
  name: string | null
}

type Inputs = {
  playerCount: number
  players: PlayerInputs[]
}

const SettlersOfCatanConfig: React.FC = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, watch, control, setValue, getValues } =
    useForm<Inputs>({
      defaultValues: {
        players: [
          { name: null, color: null },
          { name: null, color: null },
          { name: null, color: null },
        ],
      },
    })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'players',
    shouldUnregister: true,
  })
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { players } = data
    /* output
      {
        playerCount: 3,
        players: [
          {
            name: 'John',
            color: 'blue'
          },
          ...
        ]
      }
    */
    dispatch(setup(players))
  }

  const playerCount = watch('playerCount')

  useEffect(() => {
    if (playerCount === 3 && fields.length === 4) remove(3)
    if (playerCount === 4 && fields.length === 3)
      append({ name: null, color: null })
  }, [fields, playerCount, append, remove])

  return (
    <GameConfigContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput label="Players">
          <select
            {...register('playerCount', {
              valueAsNumber: true,
            })}
            defaultValue={3}
          >
            <option>3</option>
            <option>4</option>
          </select>
        </FormInput>
        {fields.map((field, i) => (
          <PlayerInputsContainer key={field.id}>
            <FormInput label="Name">
              <input
                {...register(`players.${i}.name` as const, { required: true })}
              />
            </FormInput>
            <FormInput label="Color">
              <select
                {...register(`players.${i}.color` as const, {
                  onChange: () => {
                    const playerValues = getValues('players')
                    playerValues.forEach((field, ii) => {
                      if (i !== ii && field.color === playerValues[i].color)
                        setValue(`players.${ii}.color`, null)
                    })
                  },
                })}
              >
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="white">White</option>
              </select>
            </FormInput>
          </PlayerInputsContainer>
        ))}
        <button type="submit">Start Game</button>
      </form>
    </GameConfigContainer>
  )
}

const GameConfigContainer = styled.div`
  display: flex;
  justify-content: space-around;

  margin-top: 100px;
`

const PlayerInputsContainer = styled.div`
  margin: 10px 0;
`

export default SettlersOfCatanConfig
