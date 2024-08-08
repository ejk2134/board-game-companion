import { useAppSelector } from '../redux/store'
import PlayerBox from './PlayerBox'

const SettlersOfCatanGame: React.FC = () => {
  const players = useAppSelector((state) => state.gameConfiguration.players)

  return (
    <div>
      {players.map((player) => (
        <PlayerBox {...player} />
      ))}
    </div>
  )
}

export default SettlersOfCatanGame
