import { Dispatch, SetStateAction, createContext, useState } from 'react'
import routes from '../constants/routes'

const RouterContext = createContext<[string, Dispatch<SetStateAction<string>>]>(
  ['', () => {}]
)

const RouterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const value = useState(routes.GAME)
  // const value = useState(routes.CONFIG)

  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  )
}

export { RouterProvider }
export default RouterContext
