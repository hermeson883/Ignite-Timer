import { HeaderContainer } from './style'
import logo from '../assets/Logo.svg'
import { Timer, Scroll } from '@phosphor-icons/react'

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <img src={logo} alt="" />
        <nav>
          <a href="">
            <Timer size={24} />
          </a>
          <a href="">
            <Scroll size={24} />
          </a>
        </nav>
      </HeaderContainer>
    </div>
  )
}
