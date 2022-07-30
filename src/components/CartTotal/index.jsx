import { StyledCartTotal } from './styles'
import Button from '../Button'

const CartTotal = ({ cartTotal, width, clearCart }) => {
  return (
    <StyledCartTotal width={width}>
      <div>
        <p>Total</p>
        <span>
          {cartTotal.toFixed(2)}
        </span>
      </div>

      <Button onClick={() => clearCart()}>Remover Todos</Button>
    </StyledCartTotal>
  )
}

export default CartTotal