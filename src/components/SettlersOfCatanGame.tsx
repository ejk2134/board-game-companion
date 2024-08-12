import { useAppSelector } from '../redux/store'
import PlayerBox from './PlayerBox'
import ResourceGrid from './ResourceGrid'

const SettlersOfCatanGame: React.FC = () => {
  const players = useAppSelector((state) => state.gameConfiguration.players)

  return (
    <>
      <div>
        {players.map((player, i) => (
          <PlayerBox {...player} key={i} />
        ))}
      </div>
      <div>
        <ResourceGrid />
      </div>
    </>
  )
}

export default SettlersOfCatanGame
