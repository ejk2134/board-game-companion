import { Dispatch, SetStateAction, createContext, useState } from 'react'

const RouterContext = createContext<[string, Dispatch<SetStateAction<string>>]>(
  ['', () => {}]
)

const RouterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const value = useState('config')

  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  )
}

export { RouterProvider }
