import imgLogo from '../../img/logo.svg'
import './style.css'

const Logo = ({ setFilteredProducts }) => (
  <img
    onClick={() => setFilteredProducts([])}
    id='logo'
    src={imgLogo}
    alt='Logo Burguer Kenzie'
  />
)

export default Logo