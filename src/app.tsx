import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import styled from 'styled-components'
import { colors } from './constants/styles'
import MainMenu from './components/MainMenu'

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header />
      <MainMenu />
    </AppContainer>
  )
}

const AppContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ${colors.primaryGray};
`

const root = createRoot(document.body)
root.render(<App />)
