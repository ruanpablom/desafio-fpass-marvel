import { Link, Outlet } from "react-router-dom"

import logo from '@/assets/logo.svg'
import { Container, Content, Header } from "./styles"

export function Layout() {
  return (
    <Container>
      <Header>
        <Link to="/">
          <img src={logo} alt="Marvel Logo"  />
        </Link>
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Container>
  )
}

export default Layout