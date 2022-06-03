import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  border-bottom: solid 1px;
`
const Span = styled.span`
  padding: 2px;
  color: red;
`

function Header() {
  return (
    <header className="header">
      <Nav>
        <Link to="/home">
          <Span>Home</Span>
        </Link>
        <Link to="/about">
          <Span>About</Span>
        </Link>
      </Nav>
    </header>
  )
}

export default Header
