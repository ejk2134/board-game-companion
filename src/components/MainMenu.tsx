import { useForm, SubmitHandler } from 'react-hook-form'
import FormInput from './FormInput'
import { useEffect } from 'react'

type Inputs = {
  game: 'Settlers of Catan'
}

const MainMenu: React.FC = () => {
  const { register, handleSubmit, watch } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  useEffect(() => {
    const subscription = watch(() => handleSubmit(onSubmit)())
    return () => subscription.unsubscribe()
  }, [handleSubmit, watch])

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput label="Game">
          <select {...register('game')}>
            <option>Settlers of Catan</option>
            {/* <option>Ticket to Ride</option> */}
          </select>
        </FormInput>
      </form>
    </div>
  )
}

export default MainMenu
