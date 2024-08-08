import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import { styled } from 'styled-components'
import { colors } from './constants/styles'
// import MainMenu from './components/MainMenu'
import SettlersOfCatanConfig from './components/SettlersOfCatanConfig'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { RouterProvider } from './contexts/router'
import MainView from './components/MainView'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider>
        <AppContainer>
          <Header />
          {/* <MainMenu /> */}
          <MainView />
        </AppContainer>
      </RouterProvider>
    </Provider>
  )
}

const AppContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ${colors.primaryGray};
  overflow: scroll;
`

const root = createRoot(document.body)
root.render(<App />)
