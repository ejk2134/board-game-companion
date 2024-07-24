import { colors } from '../constants/styles'
import styled from 'styled-components'

const Header: React.FC = () => {
  return (
    <HeadingContainer>
      <Heading>Board Game Companion</Heading>
    </HeadingContainer>
  )
}

const HeadingContainer = styled.div`
  border-bottom: 10px solid ${colors.darkGray};
  height: 200px;
`

const Heading = styled.h2`
  font-size: 50px;
  text-align: center;
`

export default Header
