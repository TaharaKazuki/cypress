import './index.css'

import logo from '../../assets/logo.png'

export const Header = () => {
  return(
    <header className='main-header'>
      <img src={logo} alt="a list" />
      <h2>React Tasks</h2>
    </header>
  )
}