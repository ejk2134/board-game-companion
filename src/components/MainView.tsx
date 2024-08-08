import { useContext } from 'react'
import RouterContext from '../contexts/router'
import SettlersOfCatanConfig from './SettlersOfCatanConfig'
import SettlersOfCatanGame from './SettlersOfCatanGame'
import routes from '../constants/routes'

const MainView: React.FC = () => {
  const [route] = useContext(RouterContext)
  console.log(route)

  if (route === routes.CONFIG) return <SettlersOfCatanConfig />
  if (route === routes.GAME) return <SettlersOfCatanGame />
  return <></>
}

export default MainView
