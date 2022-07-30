import { StyledCartProduct } from './styles'
import { FiTrash2 } from 'react-icons/fi'

const CartProduct = ({ prod, handleCartProduct }) => {
  return (
    <StyledCartProduct>
      <div id='cartImgBox'>
        <img src={prod.img} alt={prod.name} />
      </div>
      <div id='cartInfoBox'>
        <h3>{prod.name}</h3>
        <p>{prod.category}</p>
      </div>
      <span onClick={() => handleCartProduct(prod.id, prod.name)}>
        <FiTrash2 size='18' />
      </span>
    </StyledCartProduct>
  )
}

export default CartProduct